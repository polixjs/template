const { Service } = require('polix');

class UserService extends Service {
  constructor(){
    super();
    this._name = {};
  }

  async addUser(userId, name) {
    this._name[userId] = name;
    return this;
  }

  async getUser(userId) {
    return this._name[userId];
  }

  async users() {
    const {user} = this.app.entity;
    return user.find();
  }
}

module.exports = UserService;