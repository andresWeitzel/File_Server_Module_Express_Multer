//External
import { Router } from "express";
const multer = require("multer");
import "dotenv/config";
//Controllers
import { uploadImageController } from "../../controllers/images/upload";
//Const
const IMG_PATH_NAME_BASE_URL: string = process.env.IMG_PATH_NAME_BASE_URL || "";
const upload = multer({ dest: IMG_PATH_NAME_BASE_URL });
export const imagesRouter = Router();

imagesRouter.post("/", upload.single("img"), uploadImageController);
