import {Prisma} from '@prisma/client';
import bcrypt from 'bcryptjs';
export const Encrypt: Prisma.Middleware =  async (params: Prisma.MiddlewareParams, next) => {
    if (params.action == 'create' && params.model == 'Draw') {
        let draw = params.args.data
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(draw.passphrase, salt)
        draw.passphrase = hash
    }
    return await next(params)
}
