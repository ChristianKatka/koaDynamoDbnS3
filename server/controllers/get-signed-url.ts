import { s3Client } from "../aws";
import { Context } from "koa";
import { DOCUMENTS_URL } from "../constants/index";

export const getSignedUrl = async (ctx: Context) => {


  const action = "putObject";
  const params = {
    Bucket: "s3kuvat",
    //  voit asettaa keyn frontin kautta. vaikka krisu/kuva.jpg. luo silloin myös kansion
    // Key: ctx.request.query.key,
    Key: 'test-testikuva1.jpg',
    // content type voi lähettää urlissa mutta siinä ei saa olla kautta viivaa. siksi näin
    // ContentType: ctx.request.query.contenttype.replace('-','/'),
    ContentType: 'image/jpeg',
    // Expires: 800,
  };

  const signedUrl = await s3Client.getSignedUrlPromise(action, params);
  ctx.response.body = { signedUrl, imageURL: `${DOCUMENTS_URL}/test-testikuva1.jpg`, };
  ctx.status = 200;
};
