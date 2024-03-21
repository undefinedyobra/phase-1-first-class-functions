function returnsANamedFunction() {
    return function namedFunction() {
    };
  }
  const returnsAnAnonymousFunction = function() {
    return function() {
    };
  };
const receivesAFunction = (callback) => {
  callback();
};

module.exports = { receivesAFunction };
  
  module.exports = { returnsANamedFunction, returnsAnAnonymousFunction };