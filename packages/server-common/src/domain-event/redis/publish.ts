/*
 * Copyright (c) 2023-2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { DomainEventName } from '@authup/common';
import type { DomainEventContext } from '@authup/common';
import { hasClient, hasConfig, useClient } from 'redis-extension';
import type { DomainEventDestinations } from '../type';
import { buildDomainEventChannelName, transformEventData } from '../utils';

export async function publishDomainRedisEvent(
    context: DomainEventContext,
    destinations: DomainEventDestinations,
) : Promise<any> {
    if (!hasClient() && !hasConfig()) {
        return Promise.resolve();
    }

    context = transformEventData(context);

    const json = JSON.stringify(context);

    const client = useClient();
    const pipeline = client.pipeline();
    for (let i = 0; i < destinations.length; i++) {
        const { namespace } = destinations[i];
        const keyPrefix = (namespace ? `${namespace}:` : '');

        let key = keyPrefix + buildDomainEventChannelName(destinations[i].channel);
        pipeline.publish(key, json);

        if (
            context.event !== DomainEventName.CREATED &&
            typeof destinations[i].channel === 'function'
        ) {
            key = keyPrefix + buildDomainEventChannelName(destinations[i].channel, context.data.id);
            pipeline.publish(key, json);
        }
    }

    return pipeline.exec();
}
