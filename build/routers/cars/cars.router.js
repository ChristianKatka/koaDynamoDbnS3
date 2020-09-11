"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const get_cars_controller_1 = require("../../controllers/cars/get-cars.controller");
const add_car_controller_1 = require("../../controllers/cars/add-car.controller");
const add_car_image_controller_1 = require("../../controllers/cars/add-car-image.controller");
const get_user_cars_and_car_images_controller_1 = require("../../controllers/cars/get-user-cars-and-car-images.controller");
const carsRouter = new koa_router_1.default({ prefix: "/cars" });
exports.carsRouter = carsRouter;
carsRouter.get("/:userId", get_user_cars_and_car_images_controller_1.getUsersCarData);
carsRouter.get("/", get_cars_controller_1.getCars);
carsRouter.put("/:userId", add_car_controller_1.addCar);
carsRouter.put("/:carId/car-image", add_car_image_controller_1.addCarImage);
//# sourceMappingURL=cars.router.js.map