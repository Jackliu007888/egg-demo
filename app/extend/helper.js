const dayjs = require('dayjs')
const { STATUS_CODE } = require('../utils/enums/response')

// 格式化时间
exports.formatTime = time => dayjs(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, errmsg = '请求成功', pager = undefined })=> {
  ctx.body = {
    errcode: STATUS_CODE.OK,
    object: res,
    errmsg,
    pager
  }
  
  ctx.status = 200
}
