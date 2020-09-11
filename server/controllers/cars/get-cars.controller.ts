// might be useless controller

import { Context, Next } from "koa";
import { docClient } from "../../aws";


export const getCars = async (ctx: Context, next: Next) => {
  const params = {
    TableName: "cars",
    Key: {
      carId: "1d8a71f1-36b3-4ef7-bdb1-2b742228f590",
    },
  };

  await docClient
    .get(params)
    .promise()
    .then((response) => {
      ctx.status = 200;
      ctx.body = response.Item;
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
