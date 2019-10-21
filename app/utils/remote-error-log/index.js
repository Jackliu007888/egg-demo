const util = require('util')
const os = require('os')
const Transport = require('egg-logger').Transport
const hostname = os.hostname()

class RemoteErrorTransport extends Transport {

  // 定义 log 方法，在此方法中把日志上报给远端服务
  log(level, args) {
    let log
    if (args[0] instanceof Error) {
      const err = args[0]
      log = util.format('%s: %s\n%s\npid: %s\n', err.name, err.message, err.stack, process.pid)
    } else {
      log = util.format(...args)
    }
    const logData = {
      level,
      date: new Date().getTime(),
      pid: process.pid,
      hostname,
      message: log
    }
    // this.options.app._socket.send(logData)
    console.log(logData)
  }
}

module.exports = RemoteErrorTransport