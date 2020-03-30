import { getFiles } from "../utils";
import path from 'path'
import { db_getBlog, db_getBlogCount, db_getBlogs, db_insertBlog } from "../services/db";
import moment from "moment";
import fs from "fs";

const sourcePath = path.join(__dirname, '../../source');

async function updateBlog(ctx) {
  // const { id } = ctx.params;
  const res = await getFiles(sourcePath);
  res.map(async item => {
    try {
      await db_insertBlog(item.split(".")[0], "", moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), path.join(sourcePath, item))
    } catch (e) {
      console.log("updateBlog error", e.code)
    }
  });
}

async function getBlogs(ctx, next) {
  const { page, limit } = ctx.query;

  const blogs = await db_getBlogs(page, limit);
  const count = await db_getBlogCount();
  blogs.map(blog => {
    blog.content = fs.readFileSync(blog.path).toString()
  });
  ctx.success({ blogs, count })
}

async function getBlog(ctx) {
  try {
    const { id } = ctx.params;

    const blogArr = await db_getBlog(id);
    const blog = blogArr[0];
    if (blog) {
      blog.content = fs.readFileSync(blog.path).toString();
      ctx.success({ blog })
    } else {
      ctx.error({ msg: 'can\'t find blog id:' + id })
    }

  } catch (e) {
    ctx.error({ code: e.code || "error" });
    console.log("getBlog error", e.code)
  }
}

export default { updateBlog, getBlog, getBlogs }
