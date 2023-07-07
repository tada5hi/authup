/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { DomainType } from '@authup/core';
import type { SlotsType } from 'vue';
import { defineComponent } from 'vue';
import type { Client } from '@authup/core';
import type { EntityListSlotsType } from '../../core/entity-list';
import { createEntityList, defineDomainListEvents, defineDomainListProps } from '../../core/entity-list';
import { useAPIClient } from '../../core';

export const ClientList = defineComponent({
    name: 'ClientList',
    props: defineDomainListProps<Client>(),
    slots: Object as SlotsType<EntityListSlotsType<Client>>,
    emits: defineDomainListEvents<Client>(),
    setup(props, ctx) {
        const { render, setDefaults } = createEntityList(`${DomainType.CLIENT}`, {
            props,
            setup: ctx,
        });

        setDefaults({
            footerPagination: true,

            headerSearch: true,
            headerTitle: {
                content: 'Robots',
                icon: 'fa-solid fa-robot',
            },

            noMore: {
                content: 'No more clients available...',
            },
        });

        return () => render();
    },
    data() {
        return {
            busy: false,
            items: [],
            q: '',
            meta: {
                limit: 10,
                offset: 0,
                total: 0,
            },
            itemBusy: false,
        };
    },
});

export default ClientList;
