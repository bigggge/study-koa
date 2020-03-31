import bcrypt from "bcrypt"
import { BCRYPT_SALT, JWT_SECRET } from "../constants/auth";
import { db_getUser, db_insertUser } from "../services/db";
import { parsePostData } from "../utils";
import jwt from "jsonwebtoken";
import { jwtOptions } from "../middleware/auth";

async function register(ctx) {
  try {
    const { password, repeatPassword, username } = await parsePostData(ctx);
    if (password !== repeatPassword) {
      ctx.error("the repeatPassword is not equal to password");
      return;
    }
    const encryptedPassword = await bcrypt.hash(password, BCRYPT_SALT);
    await db_insertUser(username, encryptedPassword);
    const user = { username, password };
    const token = jwt.sign(user, JWT_SECRET, jwtOptions);
    ctx.success({ user, token })
  } catch (e) {
    ctx.error(e)
  }
}

async function login(ctx) {
  const { password, username } = await parsePostData(ctx);

  try {
    const users = await db_getUser(username);

    const user = users[0];
    const token = jwt.sign({ username, password }, JWT_SECRET, jwtOptions);

    console.log("login", user, password);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        ctx.success({ user, token });
      } else {
        ctx.error("password error")
      }
    } else {
      ctx.error("can't find user , please register first")
    }
  } catch (e) {
    console.error(e);
    ctx.error("login error")
  }
}


export default { register, login }

