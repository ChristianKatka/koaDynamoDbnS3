
// Add car to a user

import { Context, Next } from "koa";
import uuid from "uuid";
import { docClient } from "../../aws";
import { Car } from "../../models/car.model";
import { UserCar } from "../../models/user-car.model";

export const addCar = async (ctx: Context, next: Next) => {
  const carId = uuid();
  // SHOULD BE TOKEN
  const userId = ctx.params.userId

  const car: Car = {
    carId: carId,
    name: ctx.request.body.name,
    model: ctx.request.body.model,
    year: ctx.request.body.year,
  };

  const userCar: UserCar = {
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
      // Creates relation between user and car with ownership relation owner
      {
        Put: {
          TableName: 'usersCars',
          Item: userCar,
        },
      },
    ],
  };

  await docClient
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

  await next();
};
