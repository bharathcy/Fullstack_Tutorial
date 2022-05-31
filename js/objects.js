// Object ==> It should have some properties
// 	   ==> Cup => It have 
// 	   			  Size
// 	   			  Color
// 	   			  Handle
// 	   			  Juice/Water
// 	   			  Coffee/Tea


let first_name = "Raj"
let last_name = "Kumar"

let person = {
		first_name:"Sachin",
		last_name:"Tendulkar",
		age:40,
		//full_name : function(){ return this.first_name + " " +this.last_name },
		job: null,
		INDIAN:true,
		skills: ['HTML', "CSS", "JS"]
}


person.skills[0] = "Python"


let data = document.getElementById('data')


for (i in person)
{
	data.innerHTML += `
		<p>${person[i]} </p>
	`
}



// console.log(Object.keys(person))

// delete person['first_name']
// console.log(Object.keys(person))
// person['first_name'] = "Kumar"
// console.log(Object.keys(person))




let general_person = {
		full_name : function(age, gender){ 
			return this.first_name + " " +
				   this.last_name + " " +
				   age+ " " +gender
		}
}

let person1 = {
		first_name: "Sachin",
		last_name: "Tendulkar"
	}

let person2 = {
		first_name: "KL",
		last_name: "Rahul"
	}



// 1. Call Method		
// 2. Apply Method
// 3. Bind Method		==> It requires callback knowledge







let person3 = {
		first_name: "KL",
		last_name: "Rahul",
		full_name : function(){ 
			console.log(this.first_name + " " +
				   this.last_name + " ")
		}
}

//callback function:
// its a function that will be passed to another function 
// as an argument/parameter

//setTimeout(person3.full_name.bind(person1), 3000);



















