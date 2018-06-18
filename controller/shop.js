const { Controller, GET } = require('polix');

class ShopController extends Controller {
  constructor(){
    super();
  }

  @GET
  getInfo(ctx){
    ctx.body  = {
      shop: 'getInfo'
    }
  }
}