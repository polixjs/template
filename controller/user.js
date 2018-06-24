const { Controller, GET, POST, DEL, PUT  } = require('polix');

class UserController extends Controller {

  @POST
  async addUser(param, ctx){
    this.service.user.addUser(param.userId,param.name);
    ctx.body = {
      result: 'ok'
    };
  }

  @GET
  async getUser(param,ctx){
    let user = await this.service.user.getUser(param.userId);
    ctx.body = {
      user
    };
  }

  @GET('info')
  async getInfo(param, ctx){
    ctx.body = {
      v: 'v1.0'
    }
  }

  @PUT
  async updateUser(param,ctx){
    ctx.body = {
      status: true
    }
  }

  @DEL
  async delUser(param,ctx){
    ctx.body = {
      status: true
    };
  }

  @GET('status/:userId')
  async getStatus(param,ctx){
    ctx.body = {
      status: true,
      userId: param.userId
    };
  }


}

module.exports = UserController;
