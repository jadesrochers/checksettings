const R = require('ramda')

// Checks for existence of keys, non Nil (null, und, void) values
// Operates opposite order because used as transducer
const check = input => R.pipe(
  R.map(R.isNil),
  R.map(name => R.path([name])(input)),
)

// Throw error if values do not pass check
const checkSettings = R.curry((required,input) => {
  var checkT = check(input)
  // Use pipe as a transducer
  var TS = R.into([], checkT, required)
  var empty = R.findIndex(n => n)(TS)
  if(empty > -1){
    throw new Error('Required argument not present: ' + required[empty])
  }
  return true
})

exports.checkSettings = checkSettings
