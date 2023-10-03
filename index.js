function receivesAFunction(callback){
    callback()
}
 
function returnsANamedFunction(){
    return function named() {
        mahdi
    }
}


function returnsAnAnonymousFunction() {
    return function() {
      console.log('anonymous')
    }
  }

