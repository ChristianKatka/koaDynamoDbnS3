"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const add_user_controller_1 = require("../../controllers/users/add-user.controller");
const add_user_image_controller_1 = require("../../controllers/users/add-user-image.controller");
const usersRouter = new koa_router_1.default({ prefix: "/users" });
exports.usersRouter = usersRouter;
usersRouter.put("/:userId", add_user_controller_1.addUser);
usersRouter.put("/:userId/image", add_user_image_controller_1.addUserImage);
//# sourceMappingURL=users.router.js.map