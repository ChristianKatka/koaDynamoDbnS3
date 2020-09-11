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
exports.getUsersCarData = void 0;
const aws_1 = require("../../aws");
exports.getUsersCarData = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = ctx.params.userId;
    const userCarsIds = yield aws_1.docClient
        .query({
        TableName: "usersCars",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": userId,
        },
    })
        .promise()
        .then((response) => response.Items ? response.Items.map((car) => ({ carId: car.carId })) : []);
    console.log("all the cars that belong to a given user: ", userCarsIds);
    const unhandledCarsImages = userCarsIds.map((carId) => {
        return loopCarIds(carId.carId);
    });
    const userCarsImages = yield Promise.all(unhandledCarsImages);
    const userCarInfo = yield aws_1.docClient
        .batchGet({
        RequestItems: {
            cars: {
                Keys: userCarsIds,
            },
        },
    })
        .promise()
        .then((response) => {
        return response.Responses.cars;
    });
    ctx.response.body = {
        carsInfo: userCarInfo,
        carsImages: userCarsImages,
    };
});
function loopCarIds(carId) {
    return (aws_1.docClient
        .query({
        TableName: "carsImages",
        KeyConditionExpression: "carId = :carId",
        ExpressionAttributeValues: {
            ":carId": carId,
        },
    })
        .promise()
        .then((respond) => respond.Items));
}
//# sourceMappingURL=get-user-cars-and-car-images.controller.js.map