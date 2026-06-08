function setTimeoutPromisified(ms) {
  let p = new Promise(resolve => setTimeout(resolve, ms));
  return p;
  // object of the promise class
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)


function waitFor3S(resolve){ //resolve = main
  console.log(resolve);
  setTimeout(resolve,3000)
}

function setTimeoutPromisified(){
  return new Promise(waitFor3S);
}

function main(){
  console.log("main is called")
}

waitFor3S(main);