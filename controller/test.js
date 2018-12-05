const { Controller, GET } = require('polix');

class TestController extends Controller {

  @GET
  async topics(param, ctx){
    const { curl } = this.app;
    const content = await curl.get('https://cnodejs.org/api/v1/topics?page=1&limit=1&mdrender=false');
    ctx.body = content.body;
  }
}