// add picture to a car

import { Context, Next } from "koa";
import uuid from "uuid";
import { docClient } from "../../aws";

export const addCarImage = async (ctx: Context, next: Next) => {
  const carId = ctx.params.carId;
  const imageId = uuid();

  const carImage = {
    carId,
    imageId,
    ...ctx.request.body,
  };

  const params = {
    TableName: "carsImages",
    Item: carImage,
  };


  await docClient
    .put(params)
    .promise()
    .then(() => {
      ctx.status = 200;
      ctx.body = carImage;
    })
    .catch((err) => {
      ctx.status = 500;
      console.log(err);
    })
    .finally(() => {
      console.log("Done");
    });
};
