/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { RoleAttribute } from '@authup/core-kit';
import {
    DomainEventName, DomainType, buildDomainChannelName, buildDomainNamespaceName,
} from '@authup/core-kit';
import { buildRedisKeyPath } from '@authup/server-kit';
import type {
    EntitySubscriberInterface, InsertEvent,
    RemoveEvent,
    UpdateEvent,
} from 'typeorm';
import {
    EventSubscriber,
} from 'typeorm';
import { publishDomainEvent } from '../../core';
import { CachePrefix, RoleAttributeEntity } from '../domains';

async function publishEvent(
    event: `${DomainEventName}`,
    data: RoleAttribute,
) {
    await publishDomainEvent({
        content: {
            type: DomainType.ROLE_ATTRIBUTE,
            event,
            data,
        },
        destinations: [
            {
                channel: (id) => buildDomainChannelName(DomainType.ROLE_ATTRIBUTE, id),
                namespace: buildDomainNamespaceName(data.realm_id),
            },
            {
                channel: (id) => buildDomainChannelName(DomainType.ROLE_ATTRIBUTE, id),
            },
        ],
    });
}

@EventSubscriber()
export class RoleAttributeSubscriber implements EntitySubscriberInterface<RoleAttributeEntity> {
    // eslint-disable-next-line @typescript-eslint/ban-types
    listenTo(): Function | string {
        return RoleAttributeEntity;
    }

    async afterInsert(event: InsertEvent<RoleAttributeEntity>): Promise<any> {
        if (!event.entity) {
            return;
        }

        if (event.connection.queryResultCache) {
            await event.connection.queryResultCache.remove([
                buildRedisKeyPath({
                    prefix: CachePrefix.ROLE_OWNED_PERMISSIONS,
                    key: event.entity.role_id,
                }),
            ]);
        }

        await publishEvent(DomainEventName.CREATED, event.entity);
    }

    async afterUpdate(event: UpdateEvent<RoleAttributeEntity>): Promise<any> {
        if (!event.entity) {
            return;
        }

        if (event.connection.queryResultCache) {
            await event.connection.queryResultCache.remove([
                buildRedisKeyPath({
                    prefix: CachePrefix.ROLE_OWNED_PERMISSIONS,
                    key: event.entity.role_id,
                }),
            ]);
        }

        await publishEvent(DomainEventName.UPDATED, event.entity as RoleAttribute);
    }

    async afterRemove(event: RemoveEvent<RoleAttributeEntity>): Promise<any> {
        if (!event.entity) {
            return;
        }

        if (event.connection.queryResultCache) {
            await event.connection.queryResultCache.remove([
                buildRedisKeyPath({
                    prefix: CachePrefix.ROLE_OWNED_PERMISSIONS,
                    key: event.entity.role_id,
                }),
            ]);
        }

        await publishEvent(DomainEventName.DELETED, event.entity);
    }
}
