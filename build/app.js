"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const request_response_logger_middleware_1 = require("./middlewares/request-response-logger.middleware");
const cars_router_1 = require("./routers/cars/cars.router");
const users_router_1 = require("./routers/users/users.router");
const get_signed_url_route_1 = require("./routers/get-signed-url.route");
const app = new koa_1.default();
exports.app = app;
app.use(koa_json_1.default());
app.use(koa_bodyparser_1.default());
app.use(cors_1.default());
app.use(request_response_logger_middleware_1.logRequestAndResponse);
app.use(cars_router_1.carsRouter.routes()).use(cars_router_1.carsRouter.allowedMethods());
app.use(users_router_1.usersRouter.routes()).use(users_router_1.usersRouter.allowedMethods());
app.use(get_signed_url_route_1.signedUrlRouter.routes()).use(get_signed_url_route_1.signedUrlRouter.allowedMethods());
//# sourceMappingURL=app.js.map