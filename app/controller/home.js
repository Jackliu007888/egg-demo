const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.renderView('index.html', {
      viewEngine: 'nunjucks'
    })
  }
}

module.exports = HomeController
