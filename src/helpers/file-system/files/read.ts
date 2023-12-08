//External
import * as fs from "fs";
import "dotenv/config";
//Env vars
const IMG_PATH_NAME_BASE_URL: string = process.env.IMG_PATH_NAME_BASE_URL || "";
//Const
const RENAME_FILE_ERROR_DETAILS = "ERROR in readElementsFile() function.";
const encoding = "utf-8";
//Vars
let newFilePath: string;
let msgResponse: string;
let msgLog: string;
let data: any;

/**
 * @description Function to rename a file.
 * @param {any} file any type
 * @returns  a new file path
 * @example
 */
export const readElementsFile = async () => {
  try {
    data = await new Promise((resolve, reject) =>
      fs.readdir(IMG_PATH_NAME_BASE_URL, (err, content) => {
        if (err) {
          reject(err);
        }
        content.forEach((file) => {
          console.log(file);
        });
        resolve(content);
      })
    );
    return data;
  } catch (error) {
    msgResponse = RENAME_FILE_ERROR_DETAILS;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};
