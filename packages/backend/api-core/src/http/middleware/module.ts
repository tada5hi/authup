/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import swaggerUi from 'swagger-ui-express';
import { Application, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { existsSync } from 'fs';
import { mergeDeep } from '@authelion/common';
import {
    MiddlewareOptions, createMiddleware,
    responseMiddleware,
} from '../index';
import { useConfigSync } from '../../config';

export function registerMiddlewares(
    router: Application,
    options?: MiddlewareOptions,
) {
    const config = useConfigSync();

    if (options) {
        options = mergeDeep({}, config.middleware, options);
    } else {
        options = config.middleware;
    }

    if (options.bodyParser) {
        router.use(urlencoded({ extended: false }));
        router.use(json());
    }

    router.use(cookieParser());

    if (options.response) {
        router.use(responseMiddleware);
    }

    //--------------------------------------------------------------------

    router.use(createMiddleware());

    //--------------------------------------------------------------------

    if (
        options.swagger &&
        options.swagger.enabled
    ) {
        const basePath = options.swagger.directory || path.join(process.cwd(), 'writable');

        const swaggerDocumentPath: string = path.join(basePath, 'swagger.json');

        if (existsSync(swaggerDocumentPath)) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
            const swaggerDocument = require(swaggerDocumentPath);

            router.use(
                '/docs',
                swaggerUi.serve,
                swaggerUi.setup(swaggerDocument, {
                    swaggerOptions: {
                        withCredentials: true,
                        plugins: [
                            () => ({
                                components: { Topbar: (): any => null },
                            }),
                        ],
                    },
                }),
            );
        }
    }
}
