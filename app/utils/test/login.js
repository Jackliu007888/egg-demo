function login(app) {
  return app.curl('https://spdev.51zcm.cc/sp-mate/api-water/user/login', {
    method: 'POST',
    // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
    contentType: 'json',
    timeout: [ 1000, 30000 ],
    data: {
      'account': 'admin',
      'password': '54bef573129b1dcec3615216feaf4d8d13488c36',
      'id': '',
      'captcha': '',
      'op': 1,
      'platformId': '45dc7eacf8e940c3916d4e6a1b6dcef1'
    },
    dataType: 'json',
  }).then(res => res.data.object.token)
}

module.exports = login