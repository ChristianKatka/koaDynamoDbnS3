import Router from "koa-router";
import { getSignedUrl } from "../controllers/get-signed-url";


const signedUrlRouter = new Router();
signedUrlRouter.get("/get-signed-url", getSignedUrl);

export { signedUrlRouter };
