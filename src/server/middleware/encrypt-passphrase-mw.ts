import {Prisma} from '@prisma/client';
import bcrypt from 'bcryptjs';

export const Encrypt: Prisma.Middleware =  async (params: Prisma.MiddlewareParams, next) => {
  if (params.action == 'create' && params.model == 'Group') {
    let draws = params.args.data.draws.create;

     params.args.data.draws.create = draws
      .filter(n => n)
      .map(draw => {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(draw.passphrase, salt);
        draw.passphrase = hash;
        return draw;
    });
  }
  return await next(params)
}
