import * as jwt from 'express-jwt';
import * as jwtAuthz from 'express-jwt-authz';
import * as jwksRsa from 'jwks-rsa';
import { AUTH0_CONFIG } from '../config/auth0.config';

export const checkJwt: jwt.RequestHandler = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: AUTH0_CONFIG.JWKS_URI
    }),

    // Validate the audience and the issuer.
    audience: AUTH0_CONFIG.AUDIENCE,
    issuer: AUTH0_CONFIG.ISSUER,
    algorithms: ['RS256']
  });
