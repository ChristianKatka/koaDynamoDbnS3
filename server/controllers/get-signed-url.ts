import { s3Client } from "../aws";
import { Context } from "koa";

export const getSignedUrl = async (ctx: Context) => {


  const action = "putObject";
  const params = {
    Bucket: "krisuns3testi",
    //  voit asettaa keyn frontin kautta. vaikka krisu/kuva.jpg. luo silloin myös kansion
    Key: ctx.request.query.key,
    // content type voi lähettää urlissa mutta siinä ei saa olla kautta viivaa. siksi näin
    ContentType: ctx.request.query.contenttype.replace('-','/'),
    Expires: 800,
  };

  const signedUrl = await s3Client.getSignedUrlPromise(action, params);
  ctx.response.body = { signedUrl };
  ctx.status = 200;
};
