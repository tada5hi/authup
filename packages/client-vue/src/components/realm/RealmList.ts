/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { SlotsType } from 'vue';
import { defineComponent } from 'vue';
import type { Realm } from '@authup/core';
import type { EntityListSlotsType } from '../../core/entity-list';
import { createEntityList, defineDomainListEvents, defineDomainListProps } from '../../core/entity-list';
import { useAPIClient } from '../../core';

export const RealmList = defineComponent({
    name: 'RealmList',
    props: defineDomainListProps<Realm>(),
    slots: Object as SlotsType<EntityListSlotsType<Realm>>,
    emits: defineDomainListEvents<Realm>(),
    setup(props, ctx) {
        const { render } = createEntityList<Realm>({
            props,
            setup: ctx,
            load: (buildInput) => useAPIClient().realm.getMany(buildInput),
            defaults: {
                footerPagination: true,

                headerSearch: true,
                headerTitle: {
                    content: 'Realms',
                    icon: 'fa-solid fa-city',
                },

                noMore: {
                    content: 'No more realms available...',
                },
            },
        });

        return () => render();
    },
});
