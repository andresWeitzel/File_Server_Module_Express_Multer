//External
import { Request, Response } from "express";
import "dotenv/config";
/**
 * @description Controller to upload an image. For using Multer with typescript is necessary using the type any for req param
 * @param {any} req any type
 * @param {Response} res Response type
 * @returns  an object with the image information
 * @example
 */
export const uploadImageController = async (req: any , res: Response) => {
  try {
    console.log(req.file);
    return res
    .status(200)
    .send("OK");
  } catch (error) {}
};


