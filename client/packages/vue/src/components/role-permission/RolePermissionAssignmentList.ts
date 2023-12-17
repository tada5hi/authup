/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import {
    defineComponent, h,
} from 'vue';
import type { Permission } from '@authup/core';
import { SlotName } from '@vue-layout/list-controls';
import {
    RolePermissionAssignAction,
} from './RolePermissionAssignAction';
import { PermissionList } from '../permission';

export const RolePermissionAssignmentList = defineComponent({
    props: {
        entityId: {
            type: String,
            required: true,
        },
    },
    setup(props, { slots }) {
        return () => h(PermissionList, {}, {
            [SlotName.ITEM_ACTIONS]: (slotProps: { data: Permission }) => h(
                RolePermissionAssignAction,
                {
                    roleId: props.entityId,
                    permissionId: slotProps.data.id,
                },
            ),
            ...slots,
        });
    },
});
