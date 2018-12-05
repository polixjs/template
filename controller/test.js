const { Controller, GET } = require('polix');

class TestController extends Controller {

  @GET
  async ping(param, ctx){
    ctx.body = {
      msg: 'pong'
    };
  }

}

module.exports = TestController;
