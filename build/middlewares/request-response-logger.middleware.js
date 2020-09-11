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
exports.logRequestAndResponse = void 0;
exports.logRequestAndResponse = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request\n" + JSON.stringify({
        method: ctx.request.method,
        url: ctx.request.url,
        headers: ctx.request.headers || {},
        query: ctx.request.query || {},
        body: ctx.request.body || {}
    }, null, 4));
    yield next();
    console.log("Response\n" + JSON.stringify({
        statusCode: ctx.response.status,
        statusMessage: ctx.response.message,
        headers: ctx.response.headers || {},
        body: ctx.response.body || {}
    }, null, 4));
});
//# sourceMappingURL=request-response-logger.middleware.js.map