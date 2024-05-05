const test = require('../data/test')
const homePage = require('../data/home_page')
const mePage = require('../data/me_page')
const shopPage = require('../data/shop_page')
const goodslist = require('../data/goods_list')

function responseData(data) {
  return {
    code: 0,
    msg: 'successed',
    data
  }
}

module.exports = () => {
  return {
    test: test(),
    home_page: responseData(homePage()),
    me_page: responseData(mePage()),
    shop_page: responseData(shopPage()),
    goods_list: responseData(goodslist())
  }
}