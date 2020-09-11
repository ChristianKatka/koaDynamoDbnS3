import Router from "koa-router";
import { addUser } from "../../controllers/users/add-user.controller";
import { addUserImage } from "../../controllers/users/add-user-image.controller";

const usersRouter = new Router({ prefix: "/users" });
//  id should be token
usersRouter.put("/:userId", addUser);
usersRouter.put("/:userId/image", addUserImage);

export { usersRouter };
