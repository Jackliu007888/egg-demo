const Controller = require('egg').Controller

class TestController extends Controller {
  constructor (ctx){
    super(ctx)

    this.createRule = {
      foo: { type: 'string', required: true, allowEmpty: false },
    }
    this.update = {
      foo: { type: 'string', required: true, allowEmpty: false },
    }
  }

  async create() {
    const { ctx } = this
    
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }
  async index() {
    const { ctx } = this
    // ctx.validate(this.createRule)
    const payload = ctx.request.body || {}
    ctx.logger.info('some request data: %j', ctx.request.body)
    throw new Error('sadsadada')
    ctx.helper.success({ctx, res: payload})
  }
}


module.exports = TestController