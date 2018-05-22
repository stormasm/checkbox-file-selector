import fetch from "cross-fetch";
import { writeJsonDataToFilename } from "../util/file-util";

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
  let data = await getFileData(template);
  let json = JSON.stringify(data);
  let filename = "./data/out/json1.js";
  await writeJsonDataToFilename(filename, json);
}

go();
*/
