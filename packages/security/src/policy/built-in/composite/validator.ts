/*
 * Copyright (c) 2024-2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { createValidator } from '@validup/adapter-zod';
import { Container, type ContainerOptions } from 'validup';
import { z } from 'zod';
import { DecisionStrategy } from '../../../constants';
import type { CompositePolicy } from './types';

export class CompositePolicyValidator extends Container<CompositePolicy> {
    constructor(options: ContainerOptions<CompositePolicy> = {}) {
        super(options);

        this.mountAll();
    }

    mountAll() {
        this.mount('decisionStrategy', createValidator(z.nativeEnum(DecisionStrategy).optional()));

        this.mount('children', createValidator(z.array(z.object({
            type: z.string().min(3),
        }).passthrough())));

        this.mount('invert', createValidator(z.boolean().optional()));
    }
}