/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { setConfig as setHTTPConfig } from '@authup/server-http';
import { setConfig as setDatabaseConfig } from '@authup/server-database';
import { Options, OptionsInput } from '../type';
import { buildBaseOptions } from './build';
import { setupRedis } from './redis';
import { setupSmtp } from './smtp';

export function setConfigOptions(config?: OptionsInput) : Options {
    config = config || {};

    const base = buildBaseOptions(config.base || {});

    const database = setDatabaseConfig({
        env: base.env,
        rootPath: base.rootPath,
        writableDirectoryPath: base.writableDirectoryPath,
        ...(config.database || {}),
    });

    const http = setHTTPConfig({
        env: base.env,
        rootPath: base.rootPath,
        writableDirectoryPath: base.writableDirectoryPath,
        ...(config.http || {}),
    });

    if (base.redis) {
        setupRedis(base.redis);
    }

    if (base.smtp) {
        setupSmtp(base.smtp);
    }

    return {
        base,
        database,
        http,
    };
}
