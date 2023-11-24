//External
import { Request, Response } from "express";
import "dotenv/config";
/**
 * @description Controller to upload an image
 * @param {any} req any type
 * @param {any} res any type
 * @returns  an object with the image information
 * @example
 */
export const uploadImageController = async (req: Request, res: Response) => {
  try {
    return res
    .status(200)
    .send("OK");
  } catch (error) {}
};
