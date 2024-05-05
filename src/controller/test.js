const test = require('../../data/test')

module.exports = (req, res, next) => {
  const testData  = test()
  testData.desc = 'this is diy test data'
  res.success(testData)
}