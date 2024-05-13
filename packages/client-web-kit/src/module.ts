/*
 * Copyright (c) 2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { setActivePinia } from 'pinia';
import type { App, Component } from 'vue';
import * as components from './components';
import {
    installHTTPClient,
    installSocketClientManager,
    installStore,
    installTranslator,
} from './core';
import type { Options } from './types';

export function installComponents(input?: boolean | string[]) {
    if (!input) {
        return;
    }

    let componentsSelected: undefined | string[];
    if (typeof input !== 'boolean') {
        componentsSelected = input;
    }

    Object.entries(components)
        .forEach(([componentName, component]) => {
            if (
                !Array.isArray(componentsSelected) ||
                componentsSelected.indexOf(componentName) !== -1
            ) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                app.component(componentName, component as Component);
            }
        });
}

export function install(app: App, options: Options): void {
    if (options.realtime) {
        installSocketClientManager(app, {
            baseURL: options.realtimeURL || options.baseURL,
        });
    }

    if (options.pinia) {
        setActivePinia(options.pinia);
    }

    installStore(app, {
        baseURL: options.baseURL,
        cookieSet: options.cookieSet,
        cookieGet: options.cookieGet,
        cookieUnset: options.cookieUnset,
        pinia: options.pinia,
    });

    installHTTPClient(app, {
        baseURL: options.baseURL,
        pinia: options.pinia,
    });

    installTranslator(app, {
        locale: options.translatorLocale,
    });

    installComponents(options.components);
}
