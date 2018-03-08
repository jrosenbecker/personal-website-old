import * as config from './auth.config.json';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    RESPONSE_TYPE: string;
    REDIRECT: string;
    SCOPE: string;
}

const protocol = window.location.protocol;
const domain = `${window.location.hostname}${window.location.hostname === 'localhost' ? `:${window.location.port}` : ''}`;

export const AUTH0_CONFIG: AuthConfig = {
    CLIENT_ID: (<any> config).CLIENT_ID,
    CLIENT_DOMAIN: 'joerosenbecker.auth0.com',
    AUDIENCE: 'https://joerosenbecker.com',
    RESPONSE_TYPE: 'token id_token',
    REDIRECT: `${protocol}//${domain}/callback`,
    SCOPE: 'openid profile'
};
