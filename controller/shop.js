const { Controller, GET } = require('polix');

class ShopController extends Controller {

  @GET
  async getInfo(param, ctx){
    ctx.body  = {
      shop: 'getInfo'
    }
  }
}