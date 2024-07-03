/*
 * Copyright (c) 2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import zod from 'zod';
import type { AttributeNamesPolicyOptions } from './types';

const schema = zod.object({
    names: zod.array(zod.string()),
});

export function parseAttributeNamesOptions(input: unknown) : Partial<AttributeNamesPolicyOptions> {
    const result = schema.safeParse(input);
    if (result.success === false) {
        throw result.error;
    }

    return result.data;
}
