/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { createValidator } from '@validup/adapter-validator';
import type { ContainerOptions } from 'validup';
import { Container } from 'validup';
import type { RobotEntity } from '../../../../domains';
import { RequestHandlerOperation } from '../../../request';

export class RobotRequestValidator extends Container<
RobotEntity
> {
    constructor(options: ContainerOptions<RobotEntity> = {}) {
        super(options);

        this.mountAll();
    }

    mountAll() {
        const createSecretValidator = (
            optional?: boolean,
        ) => createValidator((chain) => {
            const output = chain
                .exists()
                .notEmpty()
                .isLength({ min: 3, max: 256 });

            if (optional) {
                return output.optional();
            }

            return output;
        });

        this.mount('secret', { group: RequestHandlerOperation.CREATE }, createSecretValidator());
        this.mount('secret', { group: RequestHandlerOperation.UPDATE }, createSecretValidator(true));

        this.mount('active', createValidator((chain) => chain
            .isBoolean()
            .optional()));

        this.mount('name', createValidator((chain) => chain
            .notEmpty()
            .isLength({ min: 3, max: 256 })
            .optional({ nullable: true })));

        this.mount('description', createValidator((chain) => chain
            .notEmpty()
            .isLength({ min: 3, max: 4096 })
            .optional({ nullable: true })));

        this.mount('user_id', createValidator((chain) => chain
            .exists()
            .isUUID()
            .optional({ nullable: true })));

        this.mount(
            'realm_id',
            { group: RequestHandlerOperation.CREATE },
            createValidator((chain) => chain
                .exists()
                .isUUID()
                .optional({ values: 'null' })),
        );
    }
}
