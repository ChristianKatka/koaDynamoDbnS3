import { Context, Next } from "koa";
import uuid from "uuid";
import { docClient } from "../../aws";

export const addUserImage = async (ctx: Context, next: Next) => {
  const userId = ctx.params.userId;
  const imageId = uuid();

  const userImage = {
    userId,
    imageId,
    ...ctx.request.body,
  };

  const params = {
    TableName: "usersImage",
    Item: userImage,
  };

  await docClient
    .put(params)
    .promise()
    .then(() => {
      ctx.status = 200;
      ctx.body = userImage;
    })
    .catch((err) => {
      ctx.status = 500;
      console.log(err);
    })
    .finally(() => {
      console.log("Done");
    });
};
