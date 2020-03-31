import bcrypt from "bcrypt";

const saltRounds = 10;

export const BCRYPT_SALT = bcrypt.genSaltSync(saltRounds);
export const JWT_SECRET = "koa-ssr-secret-1";
