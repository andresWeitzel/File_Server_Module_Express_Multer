//External
import express from "express";
import morgan from "morgan";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
//Config for .dotenv
import "dotenv/config";
// //Routes
import { imagesRouter } from "../routes/images-routes";
imagesRouter;
//Env vars
const APP_LOCAL_BASE_URL: string = process.env.APP_LOCAL_BASE_URL || "";
const APP_PORT: string =
  process.env.APP_FIRST_PORT || process.env.APP_SECOND_PORT || "";
const APP_LOCAL_BASE_ENDPOINT: string =
  `${APP_LOCAL_BASE_URL}:${APP_PORT}` || "";
const API_IMAGES_NAME_URL: string = process.env.API_IMAGES_NAME_URL || "";
const APP_MIDDLEWARE_ERROR_MESSAGE: string =
  "Error in appMiddleware() function. Caused by ";
//Vars
let msgResponse: string;
let msgLog: string;

/**
 * @description initial settings for cors, express, etc (Middleware)
 * @returns an express object with the initial settings
 */
export const appMiddleware = async () => {
  try {
    // Initialize the express engine
    const app = express();

    //Using morgan-middleware
    app.use(morgan("dev"));

    //-- start cors --
    //Set cors
    var corsOptions = {
      origin: APP_LOCAL_BASE_ENDPOINT,
    };
    //Use cors options
    app.use(cors(corsOptions));
    //-- end cors --

    //-- start config for data api --
    //Use express with json format
    app.use(express.json());

    //Only fort strict format configured
    app.use(express.urlencoded({ extended: true }));
    //-- end config for data api --

    //-- start with routes --
    app.use(API_IMAGES_NAME_URL, imagesRouter);
    //-- end with routes --

    //-- See all endpoints
    console.log(listEndpoints(app));

    return app;
  } catch (error) {
    msgResponse = APP_MIDDLEWARE_ERROR_MESSAGE;
    msgLog = msgResponse + error;

    console.log(msgLog);
  }
};
