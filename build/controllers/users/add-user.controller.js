"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const aws_1 = require("../../aws");
exports.addUser = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = ctx.params.userId;
    const user = {
        userId: userId,
        userName: ctx.request.body.userName,
        password: ctx.request.body.password,
    };
    const params = {
        TableName: "users",
        Item: user,
    };
    yield aws_1.docClient
        .put(params)
        .promise()
        .then(() => {
        ctx.status = 200;
        ctx.body = user;
    })
        .catch((err) => {
        ctx.status = 500;
        console.log(err);
    })
        .finally(() => {
        console.log("Done");
    });
    yield next();
});
//# sourceMappingURL=add-user.controller.js.map