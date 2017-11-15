function perform() {
var argumentsToArray =  function(args) {  

    return [].slice.apply(args); 
  }

  var args = argumentsToArray(arguments);
  console.log(args);
  args.forEach(function(value) {
    if( typeof value !==  'undefined'){
        console.log('value ===', value);
        return value;
      }else{
        console.log( "error you args is : " + value)
      }
   });
  //var getArgs = argumentsToArray(args)
  this.then = function () {
    return perform();
  }
  return this;
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