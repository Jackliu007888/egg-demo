const { app, mock, assert } = require('egg-mock/bootstrap')
const { URL_PREFIX } = require('../../../app/utils/enums/router')
const { STATUS_CODE } = require('../../../app/utils/enums/response')
const LOGIN_API = require('../../../app/utils/test/login')

mock.consoleLevel('NONE')

describe('test/controller/test.test.js', () => {
  describe('post /test', () => {
    
    // 模拟登陆获取token
    let token
    beforeEach(async () => {
      assert(token = await LOGIN_API(app))
    })

    it('should foo string', async () => {
     
      // 模拟 CSRF token
      app.mockCsrf()
      const resp = await app.httpRequest()
        .post(URL_PREFIX + '/test')
        .send({
          foo: 1,
        })
        .set('Accept', 'application/json')
        .set('Token', token)
        .expect('Content-Type', /json/)
        .expect(200)
      assert(resp.body.errcode === STATUS_CODE.VALID_ERROR)
    })
    it('should status 200 and errcode === STATUS_CODE.OK', async () => {
     
      app.mockCsrf()
      const resp = await app.httpRequest()
        .post(URL_PREFIX + '/test')
        .send({
          foo: 'bar',
        })
        .set('Accept', 'application/json')
        .set('token', token)
        .expect('Content-Type', /json/)
        .expect(200)
      assert(resp.request.header.token === token)
      assert(resp.body.errcode === STATUS_CODE.OK)
    })
  })
})
