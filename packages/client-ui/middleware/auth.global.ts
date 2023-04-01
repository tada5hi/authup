/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ErrorCode, buildNameFromAbilityID, hasOwnProperty } from '@authup/core';
import { isClientError } from 'hapic';
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';
import {
    navigateTo,
} from '#app';
import { LayoutKey } from '../config/layout';
import { useAuthStore } from '../store/auth';

function checkAbilityOrPermission(route: RouteLocationNormalized, has: (name: string) => boolean) {
    const layoutKeys : string[] = [
        LayoutKey.REQUIRED_PERMISSIONS,
    ];

    let isAllowed : undefined | boolean;

    for (let i = 0; i < layoutKeys.length; i++) {
        const layoutKey = layoutKeys[i];

        for (let j = 0; j < route.matched.length; j++) {
            const matchedRecord = route.matched[j];

            if (!Object.prototype.hasOwnProperty.call(matchedRecord.meta, layoutKey)) {
                continue;
            }

            const value = matchedRecord.meta[layoutKey];
            if (Array.isArray(value)) {
                isAllowed = value.some((val) => {
                    if (layoutKey !== LayoutKey.REQUIRED_PERMISSIONS) {
                        val = buildNameFromAbilityID(val);
                    }

                    return has(val);
                });
            }

            if (isAllowed) {
                return true;
            }
        }
    }

    if (typeof isAllowed === 'undefined') {
        return true;
    }

    if (!isAllowed) {
        const parts = route.path.split('/');
        parts.pop();
        throw new Error(parts.join('/'));
    }

    return true;
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useAuthStore();
    const { loggedIn } = storeToRefs(store);

    let redirectPath = '/';

    if (typeof from !== 'undefined') {
        redirectPath = from.fullPath;
    }

    try {
        await store.resolve();
    } catch (e) {
        let processed : boolean | undefined;

        if (isClientError(e)) {
            if (
                e.response &&
                e.response.data &&
                hasOwnProperty(e.response.data, 'code') &&
                typeof e.response.data.code === 'string'
            ) {
                const tokenErrorCodes : string[] = [
                    ErrorCode.TOKEN_EXPIRED,
                    ErrorCode.TOKEN_INVALID,
                    ErrorCode.TOKEN_INACTIVE,
                ];

                if (tokenErrorCodes.indexOf(e.response.data.code) !== -1) {
                    await store.logout();
                    processed = true;
                }
            }
        }

        if (!to.fullPath.startsWith('/logout')) {
            return navigateTo({
                path: '/logout',
                query: {
                    redirect: redirectPath,
                },
            });
        }
    }

    if (
        to.matched.some((matched) => !!matched.meta[LayoutKey.REQUIRED_LOGGED_IN])
    ) {
        if (!loggedIn.value) {
            const query : Record<string, any> = {};

            if (!to.fullPath.startsWith('/logout')) {
                query.redirect = to.fullPath;
            }

            return navigateTo({
                path: '/login',
                query,
            });
        }

        try {
            checkAbilityOrPermission(to, (name) => store.has(name));
        } catch (e) {
            return navigateTo({
                path: redirectPath,
            });
        }
    } else if (
        !to.fullPath.startsWith('/logout') &&
        to.matched.some((matched) => matched.meta[LayoutKey.REQUIRED_LOGGED_OUT])
    ) {
        const query : Record<string, any> = {};
        if (!redirectPath.includes('logout')) {
            query.redirect = redirectPath;
        }

        if (loggedIn.value) {
            return navigateTo({
                path: '/logout',
                query,
            });
        }
    }

    return undefined;
});
