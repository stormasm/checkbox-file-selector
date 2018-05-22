/* Stand alone file for testing only */

import fetch from "cross-fetch";

const template =
  "https://api.github.com/repos/stormasm/checkbox-file-selector/contents/src/data/repos";

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

import * as fs from "fs";

export async function getJsonKeyFromFile(filename) {
  var r1 = await readJsonDataFromFilename(filename, "utf8");
  var r2 = r1.trim();
  var r3 = JSON.parse(r2);
  var r4 = r3.key;
  return r4;
}

export async function readJsonDataFromFilename(fileName, type = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

export async function writeJsonDataToFilename(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

/* For testing only */
async function go() {
  let data = await getFileData(template);
  let json = JSON.stringify(data);
  let filename = "./data/out/json1.js";
  await writeJsonDataToFilename(filename, json);
}

go();
