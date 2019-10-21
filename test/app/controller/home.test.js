const { app, assert } = require('egg-mock/bootstrap')
const { JSDOM } = require('jsdom')

describe('test/controller/home.test.js', () => {
  describe('GET /', () => {
    it('should status 200 and get the body', async () => {
      // 对 app 发起 `GET /` 请求
      const resp = await app.httpRequest()
        .get('/')
        .expect(200) // 期望返回 status 200
      const dom = new JSDOM(resp.res.text)
      assert(dom.window.document.title === 'hello world')
    })

    it('should send multi requests', async () => {
      // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
      await app.httpRequest()
        .get('/')
        .expect(200) // 期望返回 status 200

      // 再请求一次
      await app.httpRequest()
        .get('/')
        .expect(200)

    })
  })
})