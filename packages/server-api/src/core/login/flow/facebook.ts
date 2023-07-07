/*
 * Copyright (c) 2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { OAuth2IdentityProvider, User } from '@authup/core';
import type { ConfigInput } from '@hapic/oauth2';
import { useRequestQuery } from '@routup/query';
import type { Request } from 'routup';
import { merge } from 'smob';
import { OAuth2IdentityProviderFlow } from './oauth2';
import type { IdentityProviderFlowIdentity } from './types';

export class FacebookLoginFlow extends OAuth2IdentityProviderFlow {
    constructor(provider: OAuth2IdentityProvider, config?: ConfigInput) {
        super(provider, merge(config || {}, {
            options: {
                scope: 'email',
                authorizationEndpoint: 'https://graph.facebook.com/oauth/authorize',
                tokenEndpoint: 'https://graph.facebook.com/oauth/access_token',
                userinfoEndpoint: 'https://graph.facebook.com/me?fields=id,name,email,first_name,last_name',
            },
        }));
    }

    async getIdentityForRequest(request: Request): Promise<IdentityProviderFlowIdentity> {
        const { code, state } = useRequestQuery(request);

        const token = await this.client.token.createWithAuthorizeGrant({
            code: code as string,
            state: state as string,
        });

        const userInfo = await this.client.userInfo.get({
            type: 'Bearer',
            token: token.access_token,
        });

        return {
            id: userInfo.id,
            name: userInfo.username,
            email: userInfo.email,
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
        };
    }
}