'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
const { URL_PREFIX } = require('./utils/enums/router')

module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  router.get(URL_PREFIX + '/demo', controller.test.demo)
  router.post(URL_PREFIX + '/test', controller.test.index)
}
