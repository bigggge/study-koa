const mysql = require('mysql');
const config = require('../../config').mysql;

const pool = mysql.createPool(config);

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
          connection.release()
        })
      }
    })
  })
};

module.exports = { query };
