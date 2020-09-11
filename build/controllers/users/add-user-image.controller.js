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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserImage = void 0;
const uuid_1 = __importDefault(require("uuid"));
const aws_1 = require("../../aws");
exports.addUserImage = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = ctx.params.userId;
    const imageId = uuid_1.default();
    const userImage = Object.assign({ userId,
        imageId }, ctx.request.body);
    const params = {
        TableName: "usersImage",
        Item: userImage,
    };
    yield aws_1.docClient
        .put(params)
        .promise()
        .then(() => {
        ctx.status = 200;
        ctx.body = userImage;
    })
        .catch((err) => {
        ctx.status = 500;
        console.log(err);
    })
        .finally(() => {
        console.log("Done");
    });
});
//# sourceMappingURL=add-user-image.controller.js.map