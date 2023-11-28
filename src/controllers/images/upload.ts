//External
import { Request, Response } from "express";
import "dotenv/config";
//Helpers
import { renameFile } from "../../helpers/files/renameFile";
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
      return res.status(400).send("Bad request, could not get image");
    }
    renameFileResult = await renameFile(file);
    if (renameFileResult == null || renameFileResult == undefined) {
      return res.status(400).send("Bad request, image has not been processed, but it has been stored");
    }
    return res.status(200).send(file);
  } catch (error) {
    msgResponse = "ERROR in uploadImageController() function.";
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
  }
};
