//External
import {Router} from 'express';
const multer = require("multer");
//Controllers
import { uploadImageController } from '../../controllers/images/upload';
//Config
const upload = multer({ dest: "assets/images/uploads/" });
//Const-vars
export const imagesRouter = Router();

imagesRouter.post("/", upload.single("avatar"), uploadImageController);

