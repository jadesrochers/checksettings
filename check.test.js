const check = require('./check')

test('Check input with all args present', () => {
  var req = ['a','b','c_d','e-f','sp ace']
  var input = {a:1,b:1,c_d:1,'e-f':1,'sp ace':1}
  expect(check.checkSettings(req, input)).toBe(true)

})

test('Check input with missing arguments', () => {
  var req = ['a','b','c_d','e-f','sp ace']
  var input = {a:1,b:1,c_d:null,'e-f':1,'sp ace':1}
  expect(() => check.checkSettings(req, input)).toThrow(/not present: c_d/)

  var req = ['a','b','c_d','e-f','sp ace']
  var input = {a:1,b:1,c_d:1,'sp ace':1}
  expect(() => check.checkSettings(req, input)).toThrow(/not present: e-f/)

})
