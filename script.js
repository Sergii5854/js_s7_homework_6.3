function perform() {
var argumentsToArray =  function(args) { 
    if(args !=='object') {
    return [].slice.apply(args); 
   }else{
     return [].slice.apply(args); 
   }
  }
  var callback;
  var args = argumentsToArray(arguments);
  args.forEach(function(value) {  
    argumentsToArray = value
   });

  var res = argumentsToArray(null, args)
    this.then = function (argumentsToArray) {
        return perform(res, argumentsToArray)
    }
    return this
}

perform(null, function(value) { // value === null
  var param = 1;
  console.log(param); // 1
  return param;
})
.then(function(param) { // param === 1
  console.log(++param); // 2
  return param;
})
.then(function(param) { // param === 2
  console.log(++param); // 3
  return param;
});

//https://stackoverflow.com/questions/4633125/is-it-possible-to-get-all-arguments-of-a-function-as-single-object-inside-that-f