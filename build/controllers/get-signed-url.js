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
exports.getSignedUrl = void 0;
const aws_1 = require("../aws");
const index_1 = require("../constants/index");
exports.getSignedUrl = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const action = "putObject";
    const params = {
        Bucket: "s3kuvat",
        Key: 'test-testikuva1.jpg',
        ContentType: 'image/jpeg',
    };
    const signedUrl = yield aws_1.s3Client.getSignedUrlPromise(action, params);
    ctx.response.body = { signedUrl, imageURL: `${index_1.DOCUMENTS_URL}/test-testikuva1.jpg`, };
    ctx.status = 200;
});
//# sourceMappingURL=get-signed-url.js.map