/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import {
    Body, Controller, Delete, Get, Params, Post, Request, Response,
} from '@decorators/express';
import { SwaggerTags } from '@trapi/swagger';
import { Realm } from '@typescript-auth/domains';
import {
    createRealmRouteHandler, deleteRealmRouteHandler,
    getManyRealmRouteHandler,
    getOneRealmRouteHandler,
    updateRealmRouteHandler,
} from './handlers';
import { ForceLoggedInMiddleware } from '../../middleware';

@SwaggerTags('auth')
@Controller('/realms')
export class RealmController {
    @Get('', [])
    async getMany(
        @Request() req: any,
            @Response() res: any,
    ): Promise<Realm[]> {
        return getManyRealmRouteHandler(req, res);
    }

    @Post('', [ForceLoggedInMiddleware])
    async add(
        @Body() user: NonNullable<Realm>,
            @Request() req: any,
            @Response() res: any,
    ) : Promise<Realm> {
        return createRealmRouteHandler(req, res);
    }

    @Get('/:id', [])
    async get(
        @Params('id') id: string,
            @Request() req: any,
            @Response() res: any,
    ): Promise<Realm> {
        return getOneRealmRouteHandler(req, res);
    }

    @Post('/:id', [ForceLoggedInMiddleware])
    async edit(
        @Params('id') id: string,
            @Body() user: NonNullable<Realm>,
            @Request() req: any,
            @Response() res: any,
    ) : Promise<Realm> {
        return updateRealmRouteHandler(req, res);
    }

    @Delete('/:id', [ForceLoggedInMiddleware])
    async drop(
        @Params('id') id: string,
            @Request() req: any,
            @Response() res: any,
    ) : Promise<Realm> {
        return deleteRealmRouteHandler(req, res);
    }
}
