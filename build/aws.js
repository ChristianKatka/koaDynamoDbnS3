"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = exports.docClient = void 0;
const AWS = __importStar(require("aws-sdk"));
if (process.env.NODE_ENV === "development") {
    AWS.config.credentials = new AWS.SharedIniFileCredentials({
        profile: "krisuiam",
    });
    AWS.config.update({
        region: process.env.AWS_DEFAULT_REGION,
    });
}
console.log('täs mun credentiaalit: ', AWS.config.credentials);
AWS.config.update({
    region: "eu-west-1",
});
exports.docClient = new AWS.DynamoDB.DocumentClient();
exports.s3Client = new AWS.S3();
//# sourceMappingURL=aws.js.map