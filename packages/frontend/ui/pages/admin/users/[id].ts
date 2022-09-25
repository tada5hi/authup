/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { Ref } from 'vue';
import { RouterView } from 'vue-router';
import { PermissionID, User } from '@authelion/common';
import { useToast } from 'vue-toastification';
import { NuxtLink } from '#components';
import { defineNuxtComponent, useRoute } from '#app';
import {
    definePageMeta, useAPI, useAsyncData,
} from '#imports';
import { LayoutKey, LayoutNavigationID } from '~/config/layout';

export default defineNuxtComponent({
    async setup() {
        definePageMeta({
            [LayoutKey.NAVIGATION_ID]: LayoutNavigationID.ADMIN,
            [LayoutKey.REQUIRED_LOGGED_IN]: true,
            [LayoutKey.REQUIRED_PERMISSIONS]: [
                PermissionID.USER_EDIT,
                PermissionID.USER_ROLE_ADD,
                PermissionID.USER_ROLE_EDIT,
                PermissionID.USER_ROLE_DROP,
            ],
        });

        const route = useRoute();

        const response = await useAsyncData(() => useAPI().user.getOne(route.params.id as string, { fields: ['+email'] }));
        const entity = response.data as Ref<User>;

        const items = [
            {
                name: 'General', routeName: 'admin-users-id', icon: 'fas fa-bars', urlSuffix: '',
            },
            {
                name: 'Roles', routeName: 'admin-users-id-groups', icon: 'fas fa-users', urlSuffix: 'roles',
            },
        ];

        const handleUpdated = () => {
            const toast = useToast();
            toast.success('The user was successfully updated.');
        };

        const handleFailed = (e) => {
            const toast = useToast();
            toast.warning(e.message);
        };

        return () => h('div', [
            h('h1', { class: 'title no-border mb-3' }, [
                h('i', { class: 'fa fa-user me-1' }),
                entity.value.name,
                h('span', { class: 'sub-title ms-1' }, [
                    'Details',
                ]),
            ]),
            h('div', { class: 'mb-2' }, [
                h(
                    'ul',
                    { class: 'nav nav-pills' },
                    items.map((item) => h('li', { class: 'nav-item' }, [
                        h(
                            NuxtLink,
                            {
                                class: 'nav-link',
                                to: `/admin/users/${entity.value.id}/${item.urlSuffix}`,
                            },
                            {
                                default: () => [
                                    h('i', { class: `${item.icon} pe-1` }),
                                    item.name,
                                ],
                            },
                        ),
                    ])),
                ),
            ]),

            h('div', [
                h(RouterView, {
                    onUpdated: handleUpdated,
                    onFailed: handleFailed,
                    entity: entity.value,
                }),
            ]),

        ]);
    },
});
