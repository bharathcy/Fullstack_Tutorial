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



console.log(Object.keys(person))

delete person['first_name']
console.log(Object.keys(person))
person['first_name'] = "Kumar"
console.log(Object.keys(person))
