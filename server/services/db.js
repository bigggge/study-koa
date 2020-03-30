const { query } = require('../utils/db');

export async function db_getAll() {
  return await query("SELECT * FROM blog order by time desc")
}

export async function db_getBlog(id) {
  return await query(`SELECT * FROM blog where id = ${id}`)
}

export async function db_getBlogs(page = 0, limit = 5) {
  const pageIndex = page * limit;
  return await query(`SELECT * from blog order by time desc limit ${pageIndex},${limit}`)
}

export async function db_getBlogCount() {
  const res = await query("SELECT COUNT(id) from blog")
  return res[0]["COUNT(id)"];
}

export async function db_insertBlog(title, label, time, path) {
  return await query(`insert into blog (title, label, time, path)
         values ('${title}','${label}','${time}','${path}')`)
}
