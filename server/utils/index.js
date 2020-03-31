const fs = require("fs");

export function getFiles(url) {

  return new Promise((resolve, reject) => {

    fs.readdir(url, (err, files) => {
      if (err) reject(err);
      resolve(files);
    })
  })

}

export function parsePostData(ctx) {
  // default form types
  const formTypes = [
    'application/x-www-form-urlencoded',
  ];

  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      ctx.req.addListener('data', data => {
        postData += data;
      });
      ctx.req.addListener('end', function () {
        try {
          console.log("parsePostData", postData);
          let parseData = {};
          if (ctx.request.is(formTypes)) {
            parseData = parseQueryStr(postData);
          } else {
            parseData = JSON.parse(postData);
          }
          console.log("parseData", parseData);
          resolve(parseData);
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryList = queryStr.split('&');
  for (let [index, query] of queryList.entries()) {
    let itemList = query.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }

  return queryData;
}
