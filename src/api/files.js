import fetch from "node-fetch";

const template =
  "https://api.github.com/repos/stormasm/mui-card-file/contents/src/data/repos";

export async function getFileData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        resolve(res.json());
      })
      .catch(error => {
        reject(error);
      });
  });
}

/* For testing only
async function go() {
  let json = await getFileData(template);
  console.log(json);
}

go();
*/
