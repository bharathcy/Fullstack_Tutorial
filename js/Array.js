let Student1 = new Array()
let Student2 = []
let Student = "INDIA"
	Student3 = Student.split('')

let Student4 = ["Sanjay", "ECE", 2020, 5.6]
let Student5 = new Array(4)
let Student6 = new Array(4).fill("3")

console.log("Student1	==> ", Student1)
console.log("Student2	==> ", Student2)
console.log("Student3	==> ", Student3)
console.log("Student4	==> ", Student4)
console.log("Student5	==> ", Student5)
console.log("Student6	==> ", Student6)


// Variable			Address				Data
// Student4 ==> 		#156000000			Sanjay			
// 				    #156000005			CSE
// 				    #156000008			2020
// 				    #1560000012			5.6


//Access and Change the value of ana element in ana array

console.log("Student4 1st Element	==> ", Student4[0])
Student4[0] = "Ajay"
console.log("Student4 1st Element	==> ", Student4[0])


console.log("Student4 Length	==> ", Student4.length)

//Student4 = ["Sanjay", "ECE", 2020, 5.6, "Sanjay", "ECE", 2020, 5.6]

// Search operations
console.log("Student4 index of 2020	==> ", Student4.indexOf(2021))
console.log("Student4 index of 2020	==> ", Student4.lastIndexOf(2021))
console.log("Student4 has ECE	? ==> ",   Student4.includes("CSE"))


console.log("Whether its an array or not? ",   Array.isArray(Student))
console.log("Convert Array to String ==> ",   Student4.toString())
console.log("Convert Array to String ==> ",   Student4.join('---'))


Student7 = ["Sanjay", "ECE", 2020, 5.6, "Ajay", "CCE", 2010, 9.6]

// Slice ==> 
// Used to create a new Array which is sub array of original array
// Original array will not be modified
// Start Index, End index (End index is Exclusive)

console.log("Student7",   Student7)		
Student7_3 = Student7.slice(2,4) // ==> Start Index, End index (End index is Exclusive)
console.log("Slice 3 elements of Student7",   Student7_3)		
console.log("Student7",   Student7)		
	
// Splice  ==> 
// Used to Remove elements or / and Add the elements
// It takes 2, 3+ parameters
// Original array will be modified

// 1st Parameter is the index that we have to cut the array from			= 2
// 2nd Parameter indicates how many items we have to remove from an array
// 3rd+ Parameters will be inserted starting from first parameter's index = 2

//Student7.splice(2,10, 1,2,3,4,5)
//Student7.splice(2,0, 1,2,3,4,5)
Student7.splice(0,10, 1,2,3,4,5)
console.log("Student7",   Student7)		



let countries = ["INDIA", "SL", "UK", "USA", "PAK"]
console.log(countries[5])

//Add elements to an existing array
countries[5] = "SA"
countries.push("NL")
countries.unshift("AUS")
console.log(countries)
//countries[7] = undefined

//Removing the elements from an array
//countries.pop()	// remove the ements from the ending index of an array
//countries.shift()	// remove the ements from the starting index of an array

countries.pop()
countries.shift()

console.log(countries)

// Reverse the element from an array
countries.reverse()
console.log(countries)
countries.sort()
console.log(countries)


// Merge 2 arrays

let countries1 = ["INDIA", "SL"]
let countries2 = ["UK", "USA", "PAK"]

let countries3 = [...countries1, ...countries2] // ... ==> Spread operator

// ... ==> Spread operators will expand the array

console.log("countries1 ==> ", countries1.concat(countries2))
console.log("countries3 ==> ", countries3)
























