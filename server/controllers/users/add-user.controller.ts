// ADDS CAR TO A USER

import { Context, Next } from "koa";
import { docClient } from "../../aws";
import { User } from "../../models/user.model";

export const addUser = async (ctx: Context, next: Next) => {
  // SHOULD BE TOKEN
  const userId = ctx.params.userId;
  
  const user: User = {
    userId: userId,
    userName: ctx.request.body.userName,
    password: ctx.request.body.password,
  };

  const params = {
    TableName: "users",
    Item: user,
  };

  await docClient
    .put(params)
    .promise()
    .then(() => {
      ctx.status = 200;
      ctx.body = user;
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
