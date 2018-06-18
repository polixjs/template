const { Controller, Get } = require('polix');

class ShopController extends Controller {
  constructor(){
    super();
  }

  @Get
  getInfo(ctx){
    ctx.body  = {
      shop: 'getInfo'
    }
  }
}