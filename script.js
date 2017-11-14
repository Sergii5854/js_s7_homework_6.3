function perform() {

  var promise = new  Promise(function ( resolve, reject) {
      this.param  = param = 1
    if (param) {
        setTimeout(function(){
            resolve(param);
        }, 1000);
    } else {
        reject(param);
    }
  });
  return  promise 
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