// Destructuring

function p(a){
	console.log(a)
}


let x = ['Ramesh', "25", "Male"]

// Unpacking of Arrays and Objects and asign them to variable
let [Name, Age, Gender] = x



let y = [1,2,3,4,5,6,7,8,9,2,4,5,78,9,90,0,8866]

let [a,b,c, ...rest] = y

//console.log(`length of y =${y.length}`, rest)


let states_capitals = [
					["Karnataka", "Banagalore"],
					["ASSAM", "Dispur"],
					["Sikkim", "Gangtok"],
					["Meghalaya", "Shillong"]
				]

// for (const [a, b] of states_capitals){
// 	console.log(`The capital city of ${a} = ${b}` )
// }


const user = {
	name : "Abhi",
	age  : "20",
	city : "Mysore",
	country : "USA"
}

let {name:N,age:A,city:C,country:CC} = user



prints = ({name, c})=> console.log(name, c)	// with destrcuting
prints(user)

prints = (u)=> console.log(u.name, u.country)		// without destrcuting
prints(user)


let even = [0,2,4,6,8]
let odd  = [1,3,5,7,9]

let some_even = [...even]
let some_odd = [...odd]

let some_all = [...even,...odd,]


console.log(`some_even=${some_even}`)
console.log(`some_odd=${some_odd}`)
console.log(some_all, some_all[3])

function arguments	   ()
within square brackets []
extracting object      {}


let some_even1 = even
let some_even2 = [...even]

