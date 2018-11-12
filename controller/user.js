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
    let { curl } = this.app;
    let result = await curl.get('https://www.baidu.com');
    ctx.body = {
      data: result
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

  @GET
  async users(param, ctx) {
    const users = await this.service.user.users();
    ctx.body = users;
  }


}

module.exports = UserController;
