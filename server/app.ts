import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { logRequestAndResponse } from "./middlewares/request-response-logger.middleware";
import { carsRouter } from "./routers/cars/cars.router";
import { usersRouter } from "./routers/users/users.router";
import { signedUrlRouter } from "./routers/get-signed-url.route"


const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());

app.use(logRequestAndResponse);

// app.use(async ctx => {
//     ctx.body = 'Welcome to the server side';
//   });

app.use(carsRouter.routes()).use(carsRouter.allowedMethods());
app.use(usersRouter.routes()).use(usersRouter.allowedMethods());
app.use(signedUrlRouter.routes()).use(signedUrlRouter.allowedMethods());


export { app };
