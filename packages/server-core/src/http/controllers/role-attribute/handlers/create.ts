/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ForbiddenError } from '@ebec/http';
import {
    PermissionName,
} from '@authup/core-kit';
import type { Request, Response } from 'routup';
import { sendCreated } from 'routup';
import { useDataSource, validateEntityJoinColumns } from 'typeorm-extension';
import { RoutupContainerAdapter } from '@validup/adapter-routup';
import { RoleAttributeEntity } from '../../../../domains';
import { RoleAttributeRequestValidator } from '../utils';
import { RequestHandlerOperation, buildPolicyEvaluationDataByRequest, useRequestEnv } from '../../../request';

export async function createRoleAttributeRouteHandler(req: Request, res: Response) : Promise<any> {
    const abilities = useRequestEnv(req, 'abilities');
    const hasAbility = await abilities.has(
        PermissionName.ROLE_UPDATE,
    );
    if (!hasAbility) {
        throw new ForbiddenError();
    }

    const validator = new RoleAttributeRequestValidator();
    const validatorAdapter = new RoutupContainerAdapter(validator);
    const data = await validatorAdapter.run(req, {
        group: RequestHandlerOperation.CREATE,
    });

    const dataSource = await useDataSource();
    await validateEntityJoinColumns(data, {
        dataSource,
        entityTarget: RoleAttributeEntity,
    });

    data.realm_id = data.role.realm_id;

    const repository = dataSource.getRepository(RoleAttributeEntity);
    const entity = repository.create(data);

    const canAbility = await abilities.can(
        PermissionName.ROLE_UPDATE,
        buildPolicyEvaluationDataByRequest(req, {
            attributes: entity,
        }),
    );

    if (!canAbility) {
        throw new ForbiddenError();
    }

    await repository.save(entity);

    return sendCreated(res, entity);
}
