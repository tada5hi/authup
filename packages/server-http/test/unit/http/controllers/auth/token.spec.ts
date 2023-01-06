/*
 * Copyright (c) 2021-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { ErrorCode, OAuth2TokenGrantResponse } from '@authup/common';
import { DatabaseRootSeederResult } from '@authup/server-database';
import { useSuperTest } from '../../../../utils/supertest';
import { dropTestDatabase, useTestDatabase } from '../../../../utils/database/connection';
import {
    createSuperTestUser,
    updateSuperTestRobot,
    updateSuperTestUser,
} from '../../../../utils/domains';

describe('src/http/controllers/token', () => {
    const superTest = useSuperTest();

    let seederResponse : DatabaseRootSeederResult | undefined;

    beforeAll(async () => {
        seederResponse = await useTestDatabase();
    });

    afterAll(async () => {
        await dropTestDatabase();
    });

    it('should grant token with password (+refresh_token)', async () => {
        let response = await superTest
            .post('/token')
            .send({
                username: 'admin',
                password: 'start123',
            });

        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined();
        expect(response.body.access_token).toBeDefined();
        expect(response.body.expires_in).toBeDefined();
        expect(response.body.refresh_token).toBeDefined();

        const tokenPayload : OAuth2TokenGrantResponse = response.body;

        response = await superTest
            .post('/token')
            .send({
                refresh_token: tokenPayload.refresh_token,
            });

        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined();
        expect(response.body.access_token).toBeDefined();
        expect(response.body.expires_in).toBeDefined();
        expect(response.body.refresh_token).toBeDefined();
    });

    it('should grant token with robot credentials', async () => {
        const response = await superTest
            .post('/token')
            .send({
                id: seederResponse.robot.id,
                secret: seederResponse.robot.secret,
            });

        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined();
        expect(response.body.access_token).toBeDefined();
        expect(response.body.expires_in).toBeDefined();
        expect(response.body.refresh_token).toBeUndefined();
    });

    it('should not grant token with password grant', async () => {
        const credentials = {
            username: 'test',
            password: 'foo-bar-baz',
        };

        let response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(400);
        expect(response.body.code).toEqual(ErrorCode.CREDENTIALS_INVALID);

        const entity = await createSuperTestUser(superTest, { password: 'foo-bar-baz', active: false });

        response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(400);
        expect(response.body.code).toEqual(ErrorCode.ENTITY_INACTIVE);

        await updateSuperTestUser(superTest, entity.body.id, { active: true });

        response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(200);

        response = await superTest
            .post('/token')
            .send({
                ...credentials,
                password: 'foo',
            });

        expect(response.status).toEqual(400);
        expect(response.body.code).toEqual(ErrorCode.CREDENTIALS_INVALID);
    });

    it('should not grant token with robot-credentials grant', async () => {
        const credentials = {
            id: seederResponse.robot.id,
            secret: seederResponse.robot.secret,
        };

        let response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(200);

        const entity = await updateSuperTestRobot(superTest, seederResponse.robot.id, { active: false });

        response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(400);
        expect(response.body.code).toEqual(ErrorCode.ENTITY_INACTIVE);

        await updateSuperTestRobot(superTest, entity.body.id, { active: true });

        response = await superTest
            .post('/token')
            .send(credentials);

        expect(response.status).toEqual(200);

        response = await superTest
            .post('/token')
            .send({
                ...credentials,
                secret: 'foo',
            });

        expect(response.status).toEqual(400);
        expect(response.body.code).toEqual(ErrorCode.CREDENTIALS_INVALID);
    });
});
