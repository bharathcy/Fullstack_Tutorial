// Synchronus  	=> Queue 
// Asynchronus	=> First come first serve ==> Whichever gives the result that will be used, and wait for other operations


```
## Promise

A Promise is a way to handle asynchronous operations in JavaScript. 
It allows handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately
returning the final value, the asynchronous method returns a promise to supply the value at some 
point in the future.

A Promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). 
When either of these options happens, the associated handlers queued up by a promise's then method are called. 
(If the promise has already been fulfilled or rejected when a corresponding handler is attached, 
Sthe handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, 
they can be chained.


Benefits of Promises 
	Improves Code Readability
	Better handling of asynchronous operations
	Better flow of control definition in asynchronous logic
	Better Error Handling


Parameters of Promises
	Promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function too).
	Callback function takes two arguments, resolve and reject
	Perform operations inside the callback function and if everything went well then call resolve.
	If desired operations do not go well then call reject.


Callback Hell:
	Callback Hell is a big issue caused by coding with complex nested callbacks. 
	Here, each and every callback takes an argument that is a result of the previous callbacks. 
	In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
	Also, if there is an error in one function, then all other functions get affected.



How to escape from a callback hell?
	JavaScript provides an easy way of escaping from a callback hell. This is done by event queue and promises.

	A promise is a returned object from any asynchronous function, to which callback methods can be added
	based on the previous function’s result.

	Promises use .then() method to call async callbacks. We can chain as many callbacks as we want and
	the order is also strictly maintained.

	Promises use .fetch() method to fetch an object from the network. It also uses .catch() method to
	catch any exception when any block fails.

	So these promises are put in event queue so that they don’t block subsequent JS code.  
	Also once the results are returned, the event queue finishes its operations.

	There are also other helpful keywords and methods like async, wait, settimeout() to simplify and 
	make better use of callbacks.

```


// Promises

	let do_promise = new Promise(function(resolve, reject){
		let x = "20"
		let y = 20

		if (x === y){
			resolve()		// Real time operations
		}
		else{
			reject()
		}
	});



	do_promise
	.then(restu_ok()=>console.log("Yah, X and Y are Equal"))
	.then(restu_ok1()=>console.log("Yah, X and Y are Equal"))
	.then(restu_ok2()==>console.log("Yah, X and Y are Equal"))
	.catch(function(){
		console.log("OOps, X and Y are Not Equal")
	})

	do_promise
	.then(function(){
		console.log("Yah, X and Y are Equal")
	})


//Callback hell
	function function_a(function_b){
		function_b(funcion_c){
				funcion_c(funcion_d){
					funcion_d(funcion_e){
						
					}
				}
		}
	}