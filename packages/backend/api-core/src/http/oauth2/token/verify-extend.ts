/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { Cache, Client } from 'redis-extension';
import {
    OAuth2TokenSubKind,
    OAuth2TokenVerification, PermissionMeta, Robot,
    TokenError,
    TokenVerificationPayload,
    User,
} from '@authelion/common';
import { NotFoundError } from '@typescript-error/http';
import { useRedisClient } from '../../../utils';
import {
    RobotEntity, RobotRepository, UserEntity, UserRepository,
} from '../../../domains';
import { CachePrefix } from '../../../config/constants';
import { useDataSource } from '../../../database';

/**
 *
 * @param token
 * @param context
 *
 * @throws TokenError
 * @throws NotFoundError
 */
export async function extendOAuth2TokenVerification(
    token: OAuth2TokenVerification,
    context?: {
        redis?: Client | boolean | string
    },
) {
    context ??= {};

    const data : TokenVerificationPayload = {
        ...token,
    };

    const redis = useRedisClient(context.redis);

    let cache : Cache<Robot['id'] | User['id']> | undefined;
    let permissionCache: Cache<Robot['id'] | User['id']> | undefined;

    if (redis) {
        cache = new Cache<Robot['id'] | User['id']>(
            { redis },
            { prefix: CachePrefix.TOKEN_TARGET, seconds: 60 },
        );

        permissionCache = new Cache<Robot['id'] | User['id']>(
            { redis },
            { prefix: CachePrefix.TOKEN_TARGET_PERMISSIONS, seconds: 60 },
        );
    }

    const dataSource = await useDataSource();

    switch (data.payload.sub_kind) {
        case OAuth2TokenSubKind.ROBOT: {
            const robotRepository = dataSource.getCustomRepository<RobotRepository>(RobotRepository);

            let entity : RobotEntity | undefined;
            if (cache) {
                entity = await cache.get(data.payload.sub);
            }

            if (!entity) {
                entity = await robotRepository.findOneBy({ id: data.payload.sub });

                if (typeof entity === 'undefined') {
                    throw new NotFoundError();
                }

                if (cache) {
                    await cache.set(entity.id, entity);
                }
            }

            if (!entity.active) {
                throw TokenError.targetInactive(OAuth2TokenSubKind.ROBOT);
            }

            let permissions : PermissionMeta[] | undefined;

            if (permissionCache) {
                permissions = await permissionCache.get(entity.id);
            }

            if (!permissions) {
                if (entity.user_id) {
                    const userRepository = dataSource.getCustomRepository<UserRepository>(UserRepository);
                    permissions = await userRepository.getOwnedPermissions(entity.user_id);
                } else {
                    permissions = await robotRepository.getOwnedPermissions(entity.id);
                }

                if (permissionCache) {
                    await permissionCache.set(entity.id, permissions);
                }
            }

            data.target = {
                kind: OAuth2TokenSubKind.ROBOT,
                entity,
                permissions: permissions || [],
            };
            break;
        }
        case OAuth2TokenSubKind.USER: {
            const userRepository = dataSource.getCustomRepository<UserRepository>(UserRepository);

            let entity : UserEntity | undefined;
            if (cache) {
                entity = await cache.get(data.payload.sub);
            }

            if (!entity) {
                const userQuery = userRepository.createQueryBuilder('user')
                    .addSelect('user.email')
                    .where('user.id = :id', { id: token.payload.sub });

                entity = await userQuery.getOne();

                if (typeof entity === 'undefined') {
                    throw new NotFoundError();
                }

                if (cache) {
                    await cache.set(entity.id, entity);
                }
            }

            if (!entity.active) {
                throw TokenError.targetInactive(OAuth2TokenSubKind.USER);
            }

            let permissions : PermissionMeta[] | undefined;

            if (permissionCache) {
                permissions = await permissionCache.get(entity.id);
            }

            if (!permissions) {
                permissions = await userRepository.getOwnedPermissions(entity.id);
                if (permissionCache) {
                    await permissionCache.set(entity.id, permissions);
                }
            }

            data.target = {
                kind: OAuth2TokenSubKind.USER,
                entity,
                permissions: permissions || [],
            };
        }
    }

    return data;
}
