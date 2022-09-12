/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */
import { LessThan } from 'typeorm';
import { useDataSource } from 'typeorm-extension';
import { OAuth2AuthorizationCodeEntity, OAuth2RefreshTokenEntity } from '../../../domains';
import { useLogger } from '../../../logger';

export async function cleanUp(log?: boolean) {
    const logger = useLogger();

    if (logger && log) {
        logger.debug('Checking for expired access-tokens, refresh-tokens & authorization-codes...');
    }

    // ------------------------------------------------------------------------------

    const dataSource = await useDataSource();
    const authorizationCodeRepository = dataSource.getRepository(OAuth2AuthorizationCodeEntity);

    await authorizationCodeRepository
        .delete({
            expires: LessThan(new Date()),
        });

    // ------------------------------------------------------------------------------

    const refreshTokenRepository = dataSource.getRepository(OAuth2RefreshTokenEntity);

    await refreshTokenRepository
        .delete({
            expires: LessThan(new Date()),
        });
}
