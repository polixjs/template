const { Controller, GET, POST, DEL, PUT  } = require('polix');

class UserController extends Controller {

  constructor(){
    super();
  }

  @POST
  addUser(ctx){
    let req = ctx.request;
    let msg = req.body;
    this.service.user.addUser(msg.userId,msg.name);
    ctx.body = {
      result: 'ok'
    };
  }

  @GET
  getUser(ctx){
    let req = ctx.request;
    let msg = req.query;
    ctx.body = {
      user: this.service.user.getUser(msg.userId)
    };
  }

  @GET('info')
  getInfo(ctx){
    ctx.body = {
      v: 'v1.0'
    }
  }

  @PUT
  updateUser(ctx){
    ctx.body = {
      status: true
    }
  }

  @DEL
  delUser(ctx){
    ctx.body = {
      status: true
    };
  }

  @GET('status/:userId')
  getStatus(ctx){
    ctx.body = {
      status: true,
      userId: ctx.params.userId
    };
  }


}

module.exports = UserController;
