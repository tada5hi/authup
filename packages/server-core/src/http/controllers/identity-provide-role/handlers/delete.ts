/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ForbiddenError, NotFoundError } from '@ebec/http';
import { PermissionName, isRealmResourceWritable } from '@authup/core-kit';
import type { Request, Response } from 'routup';
import { sendAccepted } from 'routup';
import { useDataSource } from 'typeorm-extension';
import { IdentityProviderRoleMappingEntity } from '../../../../domains';
import { useRequestEnv, useRequestParamID } from '../../../request';

export async function deleteOauth2ProvideRoleRouteHandler(
    req: Request,
    res: Response,
) : Promise<any> {
    const id = useRequestParamID(req);

    const permissionChecker = useRequestEnv(req, 'permissionChecker');
    await permissionChecker.preCheck({ name: PermissionName.IDENTITY_PROVIDER_UPDATE });

    const dataSource = await useDataSource();
    const repository = dataSource.getRepository(IdentityProviderRoleMappingEntity);
    const entity = await repository.findOneBy({ id });
    if (!entity) {
        throw new NotFoundError();
    }

    await permissionChecker.check({ name: PermissionName.IDENTITY_PROVIDER_UPDATE, data: { attributes: entity } });

    if (!isRealmResourceWritable(useRequestEnv(req, 'realm'), entity.provider_realm_id)) {
        throw new ForbiddenError();
    }

    const { id: entityId } = entity;

    await repository.remove(entity);

    entity.id = entityId;

    return sendAccepted(res);
}
