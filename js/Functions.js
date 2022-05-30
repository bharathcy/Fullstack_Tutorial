  // - [Functions](#functions)
  //   - [Function Declaration](#function-declaration)
  //   - [Function without a parameter and return](#function-without-a-parameter-and-return)
  //   - [Function returning value](#function-returning-value)
  //   - [Function with a parameter](#function-with-a-parameter)
  //   - [Function with two parameters](#function-with-two-parameters)
  //   - [Function with many parameters](#function-with-many-parameters)
  //   - [Function with unlimited number of parameters](#function-with-unlimited-number-of-parameters)
  //     - [Unlimited number of parameters in regular function](#unlimited-number-of-parameters-in-regular-function)
  //     - [Unlimited number of parameters in arrow function](#unlimited-number-of-parameters-in-arrow-function)
  //   - [Anonymous Function](#anonymous-function)
  //   - [Expression Function](#expression-function)
  //   - [Self Invoking Functions](#self-invoking-functions)
  //   - [Function with default parameters](#function-with-default-parameters)

  //   - [Arrow Function](#arrow-function)
  //   - [Function declaration versus Arrow function](#function-declaration-versus-arrow-function)

/*


let square = function(x){
  retrun x * x
}

square()

Function ==> 
  Reusable block of code or block of statements for peroming a certain task
  It will be easy to read and modify

*/


//function-declaration / definition

function display(P, N, A){  // Parameters
  console.log("Name = ", N)
  console.log("Phone = ", P)
  console.log("Age = ", A)
}

let Phone = 90909900
let Name  = "Rahul"
let Age   = 20


let Phone2 = 10101010
let Name2  = "Sumith"
let Age2   = 27

let Phone3 = 30303030
let Name3  = "Rhoith"
let Age3   = 32



// display(Phone, Name, Age)
// display(Phone, Name, Age)
// display(Phone, Name, Age)
// display(Phone, Name, Age)
// display(Phone2, Name2, Age2)
// display(Phone3, Name3, Age3)





//Default parameter Passing
function sit_student(Name, Branch, College_Name="SIT"){ //==> Default parameter value
  console.log(Name, Branch, College_Name)
}


//sit_student("Ramesh", "CSE")


// Unlimited, Unknow paremeters
function unlimited_student()
{ 
  console.log(arguments[arguments.length-1])
}

//unlimited_student("Ramesh", "Abhilash", "Bharath", "Chethan", "Dinesh", "Ezil", "Faran")



// Unlimited, Unknow paremeters
function add()
{ 
  let sum=10;
  for (i in arguments){
    sum = sum+arguments[i];   // 0 + 10
                              // 10 + 20
                              // 30 + 30
  }
  return sum
}

// console.log(add(10, 20))
// console.log(add(10, 20, 30, 40, 50, 60))
// console.log(add(0, 1, 2))
// console.log(add(1,2,3,4,5,6,7,8,9))

let print_something = function(name){
                          console.log(`Hi ${name}, I am printing something!!!`)
                          return [10, 20]
                       }


x = [20]


function add_aa(var1){
  var1.push(30)
}

// console.log("x" , x)
// console.log("return" , add_aa(x))
// console.log("x" , x)

// // var       Address     Value
// // x     ==> 20202020 => 40
                   
// // pass by value ==> the value at that address ==> not get chaged
// // pass by ref ==> the value at that address   ==> get chaged
              


// if it is not an array

// x = 20

// // var       Address     Value
// // x     ==> 20202020 => 40


// x = 22

// // var       Address     Value
// // x     ==> 20202030 => 40



// if it is an array

// x = [20]

// // var       Address     Value
// // x     ==> 20202020 => [40]


// x = [22]

// // var       Address     Value
// // x     ==> 20202030 => [22]



// x[1] = 30
// x.push(10)
// x.unshift(20)
//       ==> 20202030 => [22, 10]
//       ==> 20202030 => [40]


// x = [90, 0, 80]
// // x     ==> 3204030 => [22]




//Self invoking Function

// (function prints(){
//   console.log("Hello world!!")
// })();


// ES6
//Arrow functions

 function square(n){
   return n * n
 }

add = (a,b=300) => a+b

arguments

args