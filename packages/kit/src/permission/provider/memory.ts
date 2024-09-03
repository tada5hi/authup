/*
 * Copyright (c) 2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { aggregatePermissionItems, buildPermissionItemAggregationKey } from '../helpers';
import type { PermissionItem } from '../types';
import type { PermissionGetOptions, PermissionProvider } from './types';

export class PermissionMemoryProvider implements PermissionProvider {
    protected items : Record<string, PermissionItem> = {};

    constructor(items: PermissionItem[] = []) {
        this.setMany(items);
    }

    async get(
        options: PermissionGetOptions,
    ): Promise<PermissionItem | undefined> {
        const key = buildPermissionItemAggregationKey({
            realm_id: options.realmId,
            name: options.name,
        });

        return this.items[key];
    }

    setMany(items: PermissionItem[]) {
        this.items = aggregatePermissionItems(items);
    }
}