import jwtKoa from "koa-jwt";
import { JWT_SECRET } from "../constants/auth";


const unprotectedPaths = [
  /^\/api\/user\/login/,
  /^\/api\/user\/register/,
];

const jwtMiddleware = jwtKoa({ secret: JWT_SECRET })
  .unless({ path: unprotectedPaths });

export const jwtOptions = {
  expiresIn: "7d"
};

export default jwtMiddleware;
