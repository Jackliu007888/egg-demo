const Controller = require('egg').Controller
const LOGIN_API = require('../utils/test/login')

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

  async demo() {
    const { ctx } = this
    const payload = ctx.request.query || {}
    ctx.logger.info('some request data: %j', ctx.request.body)
    const resp = await LOGIN_API(ctx)
    ctx.helper.success({ctx, res: {resp, payload}})
  }
}


module.exports = TestController