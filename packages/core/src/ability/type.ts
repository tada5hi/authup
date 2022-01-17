/*
 * Copyright (c) 2021.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { PermissionItem } from '../permission';
import {
    ArrayInstruction, BaseInstruction, BooleanInstruction, InstructionOnInstruction,
} from './constants';

export type AbilityMeta = {
    action: string,
    subject: string
};

export type AbilityItem<T extends Record<string, any> = Record<any, any>> = AbilityMeta & PermissionItem<T>;

// -------------------------------------------------------------------

// Allow String in case of Date, to allow options like: TIME_NOW - 3600
type AllowedValue<T> = T extends Date ? (T | string) : T;

export type ConditionInstruction<V> = {
    [I in InstructionType]?: InstructionValue<I, V>
};

type InstructionValue<I, V> =
    I extends ArrayInstructionType ?
        V[] :
        (
            I extends InstructionOnInstructionType ?
                ConditionInstruction<V> :
                (
                    I extends BooleanInstructionType ?
                        boolean :
                        AllowedValue<V>)
        );

type BaseInstructionType = `${BaseInstruction}`;
type ArrayInstructionType = `${ArrayInstruction}`;
type BooleanInstructionType = `${BooleanInstruction}`;
type InstructionOnInstructionType = `${InstructionOnInstruction}`;

export type InstructionType =
    BaseInstructionType |
    ArrayInstructionType |
    InstructionOnInstructionType |
    BooleanInstructionType;

export type Condition<T extends Record<string, any> = Record<string, any>> = {
    [K in keyof T]?:
    T[K] extends Record<string, any> ?
        (T[K] extends Date ? (ConditionInstruction<T[K]> | AllowedValue<T[K]>) : Condition<T[K]>) :
        (ConditionInstruction<T[K]> | AllowedValue<T[K]>)
};
