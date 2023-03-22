/*
 * Copyright (c) 2021.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { BuildInput } from 'rapiq';
import { buildQuery } from 'rapiq';
import type { ClientDriverInstance } from 'hapic';
import type { RolePermission } from './types';
import type { CollectionResourceResponse, DomainAPISlim, SingleResourceResponse } from '../types-base';

export class RolePermissionAPI implements DomainAPISlim<RolePermission> {
    protected client: ClientDriverInstance;

    constructor(client: ClientDriverInstance) {
        this.client = client;
    }

    async getMany(data?: BuildInput<RolePermission>) : Promise<CollectionResourceResponse<RolePermission>> {
        const response = await this.client.get(`role-permissions${buildQuery(data)}`);
        return response.data;
    }

    async getOne(id: RolePermission['id']) : Promise<SingleResourceResponse<RolePermission>> {
        const response = await this.client.get(`role-permissions/${id}`);

        return response.data;
    }

    async delete(id: RolePermission['id']) : Promise<SingleResourceResponse<RolePermission>> {
        const response = await this.client.delete(`role-permissions/${id}`);

        return response.data;
    }

    async create(data: Partial<RolePermission>) : Promise<SingleResourceResponse<RolePermission>> {
        const response = await this.client.post('role-permissions', data);

        return response.data;
    }
}
