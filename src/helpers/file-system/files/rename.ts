//External
import * as fs from "fs";
import "dotenv/config";
//Env vars
const IMG_PATH_NAME_BASE_URL: string = process.env.IMG_PATH_NAME_BASE_URL || "";
//Const
const RENAME_FILE_ERROR_DETAILS = "ERROR in renameFile() function.";
//Vars
let newFilePath: string;
let msgResponse: string;
let msgLog: string;

/**
 * @description Function to rename a file.
 * @param {any} file any type
 * @returns  a new file path
 * @example
 */
export const renameFile = async (file: any) => {
  try {
    newFilePath = `${IMG_PATH_NAME_BASE_URL}${file.originalname}`;
    fs.renameSync(file.path, newFilePath);
    return newFilePath;
  } catch (error) {
    msgResponse = RENAME_FILE_ERROR_DETAILS;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};
