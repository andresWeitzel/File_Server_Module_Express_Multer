//External
import { Response } from "express";
import "dotenv/config";
//Helpers
import { renameFile } from "../../helpers/files/renameFile";
//Enums
import { statusCode } from "../../enums/http/status-code";
//Const
const OK_CODE = statusCode.OK;
const BAD_REQUEST_CODE = statusCode.BAD_REQUEST;
const BAD_REQUEST_MESSAGE = "Bad request, could not get image";
const BAD_REQUEST_ERROR_PROCESS_MESSAGE =
  "Bad request, image has not been processed, but it has been stored";
const ERROR_DETAILS = "ERROR in uploadImageController() function.";
//Vars
let file: any;
let renameFileResult: any;
let msgResponse: string;
let msgLog: string;
/**
 * @description Controller to upload an image. For using Multer with typescript is necessary using the type any for req param
 * @param {any} req any type
 * @param {Response} res Response type
 * @returns  an object with the image information
 * @example
 */
export const uploadImageController = async (req: any, res: Response) => {
  try {
    file = req.file;
    if (file == null || file == undefined) {
      return res.status(BAD_REQUEST_CODE).send(BAD_REQUEST_MESSAGE);
    }
    renameFileResult = await renameFile(file);
    if (renameFileResult == null || renameFileResult == undefined) {
      return res
        .status(BAD_REQUEST_CODE)
        .send(BAD_REQUEST_ERROR_PROCESS_MESSAGE);
    }
    return res.status(OK_CODE).send(file);
  } catch (error) {
    msgResponse = ERROR_DETAILS;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
  }
};
