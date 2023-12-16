/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { defineComponent, h } from 'vue';
import type { Role } from '@authup/core';
import { SlotName } from '@vue-layout/list-controls';
import { RoleList } from '../role';
import { RobotRoleAssignAction } from './RobotRoleAssignAction';

export const RobotRoleAssignmentList = defineComponent({
    props: {
        entityId: String,
    },
    setup(props) {
        return () => h(RoleList, {}, {
            [SlotName.ITEM_ACTIONS]: (slotProps: { data: Role }) => h(
                RobotRoleAssignAction,
                {
                    robotId: props.entityId,
                    roleId: slotProps.data.id,
                },
            ),
        });
    },
});

export default RobotRoleAssignmentList;