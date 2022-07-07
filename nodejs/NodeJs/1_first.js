// var message = "Happy Birthday!"

function myGreeting() {
  console.log(message)
}

// function setTimeout(a,b){
// 	console.log("Yessss!!!")
// }
// global.setTimeout(myGreeting, 5000);

// 					browser											node

// user defined ==> 	accessible as global variable				not accessible
// 					overwirte the defualts							You cannot


//console.log(module)
//module ==> is a file or files in javascript with which we can import the functionalities


































var module_1   = require('./module_1');

module_1.setTimeout2(myGreeting, 5000);















