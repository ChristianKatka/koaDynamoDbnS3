// gets all cars that user is connected to and pictures of the cars

import { Context, Next } from "koa";
import { docClient } from "../../aws";

export const getUsersCarData = async (ctx: Context, next: Next) => {
  const userId = ctx.params.userId;

  // returns car id:s that belong to the user, if user doesnt have any cars return empty array
  const userCarsIds = await docClient
    .query({
      TableName: "usersCars",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
    })
    .promise()
    // response is object that holds given user all cars Items [ {userid: 123456789, carId: 90290q}, {userid: 123456789, carId: 9duj8} ]
    .then((response) =>
      response.Items ? response.Items.map((car) => ({ carId: car.carId })) : []
    );

  console.log("all the cars that belong to a given user: ", userCarsIds);

  const unhandledCarsImages = userCarsIds.map((carId) => {
    return loopCarIds(carId.carId);
  });
  const userCarsImages = await Promise.all(unhandledCarsImages);

  const userCarInfo = await docClient
    .batchGet({
      RequestItems: {
        //from cars table
        cars: {
          Keys: userCarsIds,
        },
      },
    })
    .promise()
    .then((response) => {
      return response.Responses!.cars;
    });

  ctx.response.body = {
    carsInfo: userCarInfo,
    carsImages: userCarsImages,
  };
};

// CAR IMAGES
function loopCarIds(carId: string) {
  return (
    docClient
      .query({
        TableName: "carsImages",
        KeyConditionExpression: "carId = :carId",
        ExpressionAttributeValues: {
          ":carId": carId,
        },
      })
      .promise()
      // return only Items. we dont need scanned count etc etc
      .then((respond) => respond.Items)
  );
}
