/*
 * Copyright (c) 2024-2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { PolicyDecisionStrategy } from '../../constants';
import type { AnyPolicy, PolicyEvaluator } from '../../types';
import { invertPolicyOutcome } from '../../utils';
import { isGroupPolicy } from './helper';
import type { CompositePolicyOptions } from './types';

export class CompositePolicyEvaluator<
    C extends Record<string, any> = Record<string, any>,
> implements PolicyEvaluator<CompositePolicyOptions, C> {
    protected evaluators : Record<string, PolicyEvaluator>;

    constructor(evaluators: Record<string, PolicyEvaluator>) {
        this.evaluators = evaluators;
    }

    try(policy: AnyPolicy, context: C): boolean {
        if (!isGroupPolicy(policy)) {
            throw new Error('');
        }

        return this.execute(policy, context);
    }

    execute(policy: CompositePolicyOptions, context: C): boolean {
        let count = 0;

        for (let i = 0; i < policy.children.length; i++) {
            const childPolicy = policy.children[i];
            let outcome : boolean;

            if (isGroupPolicy(childPolicy)) {
                outcome = this.try(childPolicy, context);
            } else {
                const evaluator = this.evaluators[policy.children[i].type];
                if (!evaluator) {
                    throw new Error('');
                }

                outcome = evaluator.try(policy.children[i], context);
            }

            if (outcome) {
                if (policy.decisionStrategy === PolicyDecisionStrategy.AFFIRMATIVE) {
                    return invertPolicyOutcome(true, policy.invert);
                }

                count++;
            } else {
                if (policy.decisionStrategy === PolicyDecisionStrategy.UNANIMOUS) {
                    return invertPolicyOutcome(false, policy.invert);
                }

                count--;
            }
        }

        return invertPolicyOutcome(count >= 0, policy.invert);
    }
}