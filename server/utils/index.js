const fs = require("fs");

export function getFiles(url) {

  return new Promise((resolve, reject) => {

    fs.readdir(url, (err, files) => {
      if (err) reject(err);
      resolve(files);
    })
  })

}
