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
exports.addCar = void 0;
const uuid_1 = __importDefault(require("uuid"));
const aws_1 = require("../../aws");
exports.addCar = (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = uuid_1.default();
    const userId = ctx.params.userId;
    const car = {
        carId: carId,
        name: ctx.request.body.name,
        model: ctx.request.body.model,
        engine: ctx.request.body.engine,
        registered: ctx.request.body.registered,
        year: ctx.request.body.year,
        price: ctx.request.body.price,
        kilometers: ctx.request.body.kilometers,
        location: ctx.request.body.location,
        description: ctx.request.body.description,
    };
    const userCar = {
        userId: userId,
        carId: carId,
        ownershipRelation: 'owner'
    };
    const params = {
        TransactItems: [
            {
                Put: {
                    TableName: 'cars',
                    Item: car,
                },
            },
            {
                Put: {
                    TableName: 'usersCars',
                    Item: userCar,
                },
            },
        ],
    };
    yield aws_1.docClient
        .transactWrite(params)
        .promise()
        .then(() => {
        ctx.status = 200;
        ctx.body = car;
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
//# sourceMappingURL=add-car.controller.js.map