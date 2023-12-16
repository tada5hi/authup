/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Continu } from 'continu';

export type UIOptions = {
    port: number,

    host: string,

    apiUrl?: string,

    publicUrl?: string
};
export type UIOptionsInput = Partial<UIOptions>;

export type UIConfig = Continu<UIOptions, UIOptionsInput>;