/*

	1. forEach
	2. map
	3. reduce
	4. filter
	5. every
	6. some
	7. join
	8. find
	9. findIndexOf
	10. indexOf
	11. includes
	12. fill
	13. splice
	14. slice
	15. concat
	16. push
	17. pop
	18. shift
	19. unshift
	20. reverse
	21. sort
*/

let contents = {

	"1. forEach" : `
							<li>Calls a function for each element in a array</li>
							<li>It does not return anything, i.e it does not change the original array</li>
							<li>But can store the value in a global variable</li>
							`,
	"2. map" :  `<li>The map method is used to modify each item of an array</li>
							 <li>This method does not change the original array.</li>`,

	"3. reduce" :  `<li>This executes a reducer function for array element starts from left to right</li>
								  <li>it returns a single value ==> the function's accumulated result.</li>
								  <li>This method does not change the original array.</li>

								  <h5>Reducer function parameters:</h5>
									<li style="margin-left:100px;"> total	</li>
									<li style="margin-left:100px;"> currentValue</li>
									<li style="margin-left:100px;"> currentIndex</li>
									<li style="margin-left:100px;"> arr</li>`,

	"4. filter" :  `<li>Returns the filtered Array</li>
									<li>It returns an array containing the items where the inner function returns true.</li>
									<li>This method does not change the original array.</li>`,


	"5. every" :  "<li>Check if all the elements are similar in one aspect. It returns boolean</li>",
	"6. some" :  "<li>Check if some of the elements are similar in one aspect. It returns boolean</li>",
	"7. join" :  "<li>Joins all the array elements</li>",
	"8. find" :  "<li>Return the first element which satisfies the condition</li>",
	"9. findIndexOf" :  "<li>Return the index of first element which satisfies the condition</li>",
	"10. indexOf" :  "<li>Return the index of element</li>",
	"11. includes" :  "<li>This method checks if an array includes the element that passes the condition, returning true or false as appropriate.</li>",
	"12. fill" :  "<li>This method fills the elements in an array with a static value and returns the modified array.</li>",
	"13. splice" :  "This function performs somgething",
	"14. slice" :  "This method returns a new array with specified start to end elements.",
	"15. concat" :  "This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.",
	"16. push" :  "This method adds one or more elements to the end of array and returns the new length of the array.",
	"17. pop" :  "This method removes the last element from the end of array and returns that element.",
	"18. shift" :  "This method removes the first element from an array and returns that element.",
	"19. unshift" :  "This method adds one or more elements to the beginning of an array and returns the new length of the array.",
	"20. reverse" :  "This method reverses an array in place. Element at last index will be first and element at 0 index will be last.",
	"21. sort" :  "This method is used to arrange/sort array’s elements either in ascending or descending order."
}

let accordion_item = document.getElementById('accordion_item')
let i = 0
for (let content in contents) 
{
		i++
    accordion_item.innerHTML+=`<div class="accordion-item">
			    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
			      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne${i}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
			        ${content}
			      </button>
			    </h2>
			    <div id="panelsStayOpen-collapseOne${i}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
			      <div class="accordion-body">
			      	${contents[content]}
			      </div>
			    </div>
		</div>`
}



// filter()		==> Returns the filtered Array
// 	Calls a function for each element in a array
// 	It returns an array containing the items where the inner function returns true.
// 	This method does not change the original array.

	// let sum = 0;
	// const numbers = [65, 44, 12, 4];
	// console.log(numbers.filter(myFunction))

	// function myFunction(item) {
	//   return item > 20
	// }


// reduce() ==> Single Value
// 	This executes a reducer function for array element starts from left to right
// 	it returns a single value: the function's accumulated result.
// 	This method does not change the original array.
// 	Reducer function parameters:
// 		total
// 		currentValue
// 		currentIndex
// 		arr

// 	initialValue.
// 		A value to be passed to the function as the initial value.


// 	const numbers = [175, 50, 25];
// 	document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// 	function myFunc(total, num) {
// 	  return total - num;
// 	}


// Note: You can use arrow function or normal function




// every: 		==> Single Value
// 		Check if all the elements are similar in one aspect. It returns boolean

// const ages = [3, 3, 19, 40];
// console.log(ages.every(checkAge));

// function checkAge(age) {
//   return age > 18;
// }


// find: 		==> Single Value
// 		Return the first element which satisfies the condition

// 		const ages = [24, 22, 25, 32, 35, 18]
// 		const age = ages.find((age) => age < 20)

// 		console.log(age)



// findIndex	==> Single Value
// 	Return the position of the first element which satisfies the condition

// 	const names = ['Bharath', 'Mathias', 'Elias', 'Brook']
// 	const ages = [24, 22, 25, 32, 35, 18]

// 	const result = names.findIndex((name) => name.length > 7)
// 	console.log(result) // 0

// 	const age = ages.findIndex((age) => age < 20)
// 	console.log(age) // 5
// 	```


// some
// 	Check if some of the elements are similar in one aspect. It returns boolean

	// const names = ['Bharath', 'Mathias', 'Elias', 'Brook']
	// const bools = [true, true, true, true]

	// const areSomeTrue = names.some((b) =>  b.length <6)

	// console.log(areSomeTrue) //true
// 	```

// 	```js
// 	const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
// 	console.log(areAllStr) // false



// #### Sorting string values
// #### Sorting Numeric values

// 	As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

// 	```js
// 	const numbers = [9.81, 3.14, 100, 37]
// 	// Using sort method to sort number items provide a wrong result. see below
// 	console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// 	numbers.sort(function (a, b) {
// 	  return a - b
// 	})

// 	console.log(numbers) // [3.14, 9.81, 37, 100]

// 	numbers.sort(function (a, b) {
// 	  return b - a
// 	})
// 	console.log(numbers) //[100, 37, 9.81, 3.14]
// 	```

// #### Sorting Object Arrays

// When ever we sort objects in an array. We use the object key to compare. Lets see the example below.

// ```js
// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })

// // or

// objArr.sort(function (a, b) {
//   if (a['key'] < b['key']) return -1
//   if (a['key'] > b['key']) return 1
//   return 0
// })

// const users = [
//   { name: 'Bharath', age: 150 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyo', age: 100 },
//   { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//   if (a.age < b.age) return -1
//   if (a.age > b.age) return 1
//   return 0
// })
// console.log(users) // sorted ascending
// // [{…}, {…}, {…}, {…}]





// Higher Order Function

hof = document.getElementById('HOF')
hof.innerHTML = `
Higher Order Functions are the functions which takes an another function as an
 argument or the functions which return another function as an output

<br>

The function which is passsed to such HOF ara called as Callback Functions

<br><br><br><br><br>
<hr>
`

// function by2(n){
// 	return n * 2
// }

// function by5(n){
// 	return n * 5
// }


// function multiply(c, number){

// 	return c(number)
// }


// console.log(multiply(by2, 10))
// console.log(multiply(by5, 10))

// function display(){
// 	console.log("hello world")
// }

// setTimeout(display, 2000)













// FOR EACH
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(i=> sum += i)
console.log(sum)
console.log(numbers)



// MAP
const number_array = [1, 2, 3, 4];
let modified_array = number_array.map(i=>i*i)
console.log(number_array)
console.log(modified_array)


//REDUCE

const numbers_reduce = [175, 50, 25];
let output_reduce = numbers_reduce.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}

console.log("output_reduce  ==> ", output_reduce)

const numbers_reduce2 = [175, 50, 25];
let output_reduce2 = numbers_reduce2.reduce((total, currentValue)=> total + currentValue, 50);
console.log("output_reduce  ==> ", output_reduce2)



//FILTER
const student_marks = [80, 91, 93, 90, 70, 50];
output_filter_array = student_marks.filter((item)=> item <= 90)
console.log(output_filter_array)



//EVERY
output = student_marks.every((item)=> item <= 70)	//and 
console.log(output)


//SOME
output = student_marks.some((item)=> item <= 50)	//or 
console.log(output)


//JOIN
output = student_marks.join(':') 
console.log(output)


//FIND
output = student_marks.find((item)=> item > 80)
console.log(output)


//FIND INDEX
output = student_marks.findIndex((item)=> item < 70)
console.log(output)


