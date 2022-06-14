//currying


// function add(a,b,c,b){
//  	return a + b + c
// }

// function add_0(a){
// 	return function add_1(b){
// 		return function add_a(c){
// 			return a+b+c
// 		}
// 	}
// }

// console.log(add_0(10)(20)(30))
// console.log(add(10,20,30))



//Shallow Copy and Deep Copy

// Shallow Copy => Changes the content in the adress 
// Deep Copy 	=> only values get changes


let x = [1,2,3]
let y = x
let z = [...x]
y.push(80)
console.log(x, y, z)













