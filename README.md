# [egg.js](https://eggjs.org) 示例

## 项目目录说明

详见[egg.js 目录结构](https://eggjs.org/zh-cn/basics/structure.html)

## 开发

### 项目运行

```bash
npm run dev
```

### 前端项目联调

- 前端项目需要将 node 中间层的接口地址代理到 `localhost:7001`
- 前端项目打包目录为 `app/view/`

### 网关

从网关过来的请求会在请求的头部加上 `userid`  `nickname` `openid` `appid`
如需获取参数值则用 ```ctx.header['xxxx']``` 来获取

### 获取请求参数

通过 `ctx.validate({...})` 验证参数
以下为 RESTful API 风格的接口 获取请求参数方式

- post

```js
const payload = ctx.request.body || {}
```

- get

```js
const payload = ctx.query || {}
```

- delete

```js
const payload = ctx.params || {}
```

- put

```js
const { id } = ctx.params
const payload = ctx.request.body || {}
```

### 请求

#### 请求库

框架自带 [HttpClient](https://eggjs.org/zh-cn/core/httpclient.html)

通过 `app` 、`ctx` 的 httpclient对象即可调用

#### 请求方式

后端服务由于使用 k8s,各个微服务间通信是通过 http/https请求，服务端请求不同于前端请求在于服务端是通过服务名访问

例如：

```JAVA
HttpRequest
.post("abc-manager/abcmgr/reportForm/getTerminalInfos")
.form(params)
.timeout(30000)
.execute()
.body();
```

### 日志

- Error
自动捕获 Error 并上传 Error 日志，所以 Error 可以不打日志。
需要上传错误类型的日志 可以 `throw new Error('xxx')`

- INFO
重要信息可以通过 `this.ctx.logger.info('xxxx')` 或 `this.app.logger.info('xxxx')`

以标准的JSON格式输出日志,通过 scoket 上传日志（待完成）

### debugger

- 执行 vscode debugger **（以下可选）**
- debugger 前需推送镜像到远端， k8s需正常发现服务
- 执行 `./cli ${命名空间名称}`
- 执行 `debug ${服务名} ${端口}`

## 单元测试

参考：

- [egg-单元测试](https://eggjs.org/zh-cn/core/unittest.html)
- `test/app/controller/home.test.js`
- `test/app/controller/test.test.js`

保证：

- 核心方法都需要测试
- 每个接口都需要测试（至少验证errcode === OK）

## 部署

### 部署到测试环境

- 修改 `build.sh` 中的命名空间及服务名
- 执行 `./build.sh`
- cli 到命名空间 重新构建服务

### 测试域名 nginx 配置

- 如果proxy_pass的URL定向里包括URI，那么请求中匹配到location中URI的部分会被proxy_pass后面URL中的URI替换
- 如果proxy_pass的URL定向里不包括URI，那么请求中的URI会保持原样传送给后端server

***注意`8080`后的 `/`***

```bash
    location /name/ {
      proxy_pass http://egg-demo.sp-base:8080/
    }
```

### 部署到正式环境

- 修改 `build-pro.sh` 中的命名空间、服务名、版本号
- 执行 `./build-pro.sh`
- 管理员手动升级
