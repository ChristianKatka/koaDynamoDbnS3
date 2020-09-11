import Router from "koa-router";
import { getCars } from "../../controllers/cars/get-cars.controller";
import { addCar } from "../../controllers/cars/add-car.controller";
import { addCarImage } from "../../controllers/cars/add-car-image.controller";
import { getUsersCarData } from "../../controllers/cars/get-user-cars-and-car-images.controller";


const carsRouter = new Router({ prefix: "/cars" });

// get all cars that belong to user and those cars pictures
carsRouter.get("/:userId", getUsersCarData)
carsRouter.get("/", getCars);
// create car to one user. id should be token
carsRouter.put("/:userId", addCar);
carsRouter.put("/:carId/car-image", addCarImage);

export { carsRouter };
