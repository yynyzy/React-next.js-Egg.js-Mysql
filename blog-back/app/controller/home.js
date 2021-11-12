'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggss';
  }

  async create() {
    const { ctx } = this
    console.log(this);
    ctx.body = '213'
  }
}

module.exports = HomeController;
