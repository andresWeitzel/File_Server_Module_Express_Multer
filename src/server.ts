//External
//Config for .dotenv
import "dotenv/config";
//Config middleware
import { appMiddleware } from "./config/middleware";
//Environment vars
const APP_PORT = process.env.APP_FIRST_PORT || process.env.APP_SECOND_PORT;
//const
const RUN_SERVER_ERROR_MESSAGE: string =
  "Error in runServer() function.";
//vars
let msgResponse: string;
let msgLog: string;

/**
 * @description function in charge of starting the server, adding the initial configuration and setting the http routes
 * @returns active instance of the server for handling requests and responses
 */
const runServer = async () => {
  try {
    //Middleware
    const app: any = await appMiddleware();

    //Server
    app.listen(APP_PORT, () => {
      console.log(`Server is running on port ${APP_PORT}`);
    });
  } catch (error) {
    msgResponse = RUN_SERVER_ERROR_MESSAGE;
    msgLog = msgResponse  + `Caused by ${error}`;

    console.log(msgLog);
  }
};

runServer();
