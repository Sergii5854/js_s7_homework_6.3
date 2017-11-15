function perform() {

  var argumentsToArray = function (args) {
    return [].slice.apply(args);
  }

  var callback;
  var args = argumentsToArray(arguments);
  args.forEach(function (value) {
    callback = value
  });

  var res = callback.apply(null, args)
  this.then = function (callback) {
    return perform(res, callback)
  }
  return this
}

perform(null, function (value) { // value === null
  var param = 1;
  console.log(param); // 1
  return param;
})
    .then(function (param) { // param === 1
      console.log(++param); // 2
      return param;
    })
    .then(function (param) { // param === 2
      console.log(++param); // 3
      return param;
    });
