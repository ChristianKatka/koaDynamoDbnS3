"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signedUrlRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const get_signed_url_1 = require("../controllers/get-signed-url");
const signedUrlRouter = new koa_router_1.default();
exports.signedUrlRouter = signedUrlRouter;
signedUrlRouter.get("/get-signed-url", get_signed_url_1.getSignedUrl);
//# sourceMappingURL=get-signed-url.route.js.map