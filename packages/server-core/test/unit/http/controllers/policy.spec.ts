/*
 * Copyright (c) 2021-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Policy } from '@authup/core-kit';
import type { CompositePolicyOptions, TimePolicyOptions } from '@authup/permitus';
import { BuiltInPolicyType } from '@authup/permitus';
import { useSuperTest } from '../../../utils/supertest';
import { dropTestDatabase, useTestDatabase } from '../../../utils/database/connection';

describe('src/http/controllers/policy', () => {
    let superTest = useSuperTest();

    beforeAll(async () => {
        await useTestDatabase();
    });

    afterAll(async () => {
        await dropTestDatabase();

        superTest = undefined;
    });

    const ids : string[] = [];

    const timePolicyPayload = () => ({
        name: 'time',
        type: BuiltInPolicyType.TIME,
        start: Date.now(),
        end: Date.now(),
        invert: false,
        parent_id: ids[0],
    } as Partial<TimePolicyOptions>);

    it('should create group policy', async () => {
        const response = await superTest
            .post('/policies')
            .send({
                name: 'group',
                type: BuiltInPolicyType.COMPOSITE,
                invert: false,
            } as Partial<CompositePolicyOptions>)
            .auth('admin', 'start123');

        expect(response.status).toEqual(201);
        expect(response.body).toBeDefined();

        ids.push(response.body.id);
    });

    it('should create time policy', async () => {
        const response = await superTest
            .post('/policies')
            .send(timePolicyPayload())
            .auth('admin', 'start123');

        expect(response.status).toEqual(201);
        expect(response.body).toBeDefined();

        ids.push(response.body.id);
    });

    it('should not create time policy twice', async () => {
        const response = await superTest
            .post('/policies')
            .send(timePolicyPayload())
            .auth('admin', 'start123');

        expect(response.statusCode).toEqual(409);
    });

    it('should create custom policy', async () => {
        const response = await superTest
            .post('/policies')
            .send({
                name: 'foo',
                type: 'foo',
                bar: 'baz',
                parent_id: ids[0],
            } as Partial<Policy>)
            .auth('admin', 'start123');

        expect(response.status).toEqual(201);
        expect(response.body).toBeDefined();
        expect(response.body.bar).toEqual('baz');
        ids.push(response.body.id);
    });

    it('should read collection', async () => {
        const response = await superTest
            .get('/policies')
            .auth('admin', 'start123');

        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined();
        expect(response.body.data).toBeDefined();
        expect(response.body.data.length).toBeGreaterThanOrEqual(2);
    });

    it('should read time policy', async () => {
        const response = await superTest
            .get(`/policies/${ids[1]}`)
            .auth('admin', 'start123');

        expect(response.status).toEqual(200);
        expect(response.body).toBeDefined();
    });

    it('should update resource', async () => {
        const response = await superTest
            .post(`/policies/${ids[1]}`)
            .send({
                name: 'time',
                type: BuiltInPolicyType.TIME,
                start: Date.now(),
                end: Date.now(),
                invert: false,
            } satisfies Partial<TimePolicyOptions> & { [key: string]: any })
            .auth('admin', 'start123');

        expect(response.status).toEqual(202);
        expect(response.body).toBeDefined();
    });

    it('should delete resource', async () => {
        for (let i = ids.length - 1; i >= 0; i--) {
            const response = await superTest
                .delete(`/policies/${ids[i]}`)
                .auth('admin', 'start123');

            expect(response.status)
                .toEqual(202);
            expect(response.body)
                .toBeDefined();
        }
    });
});
