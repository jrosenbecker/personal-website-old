import { Request, Response } from 'express';
import { interfaces, controller, httpGet } from 'inversify-express-utils';
import { TYPES } from '../inversify/inversify.types';
import { checkJwt } from '../middleware/check-jwt';

@controller('/admin', checkJwt)
export class ApiController implements interfaces.Controller {
    @httpGet('/printrequest')
    private index(req: Request, res: Response): Response {
        return res.json({
            headers: req.headers,
            body: req.body
        });
    }
}
