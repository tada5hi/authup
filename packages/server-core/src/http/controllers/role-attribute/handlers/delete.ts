/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { NotFoundError } from '@ebec/http';
import { PermissionName } from '@authup/core-kit';
import type { Request, Response } from 'routup';
import { sendAccepted } from 'routup';
import { useDataSource } from 'typeorm-extension';
import { RoleAttributeEntity } from '../../../../domains';
import { useRequestEnv, useRequestParamID } from '../../../request';

export async function deleteRoleAttributeRouteHandler(req: Request, res: Response) : Promise<any> {
    const permissionChecker = useRequestEnv(req, 'permissionChecker');
    await permissionChecker.preCheck({ name: PermissionName.ROLE_UPDATE });

    const id = useRequestParamID(req);

    const dataSource = await useDataSource();
    const repository = dataSource.getRepository(RoleAttributeEntity);

    const entity = await repository.findOneBy({ id });

    if (!entity) {
        throw new NotFoundError();
    }

    await permissionChecker.check({ name: PermissionName.ROLE_UPDATE, data: { attributes: entity } });

    const { id: entityId } = entity;

    await repository.remove(entity);

    entity.id = entityId;

    return sendAccepted(res, entity);
}
