//Strings tutorial

let space = " ";
let first_name = "KL Rahul";

let multi_line1 = `Opening the crucial Quad summit in Tokyo, 
Prime Minister ${first_name} said Quad's efforts are encouraging a , 
open and inclusive Indo-Pacific region' He said mutual trust and determination 
are giving new hope to democratic principles, adding that Quad has gained world prominence.`;


let multi_line2 = 'Opening the crucial Quad summit in Tokyo, \
Prime Minister  said Quad\'s efforts are encouraging a free, \
open and inclusive Indo-Pacific region.<br> He said mutual trust and determination \
are giving new hope to democratic principles, adding that Quad has gained world prominence.';


let number1 = 10
let number2 = 20



let h1 = document.getElementById('first_heading')
//h1.innerHTML = first_name + space+ multi_line1 + number1 + number2 + space + (number1 + number2)


//Template String
let review_positive = "Good";
let review_negative = "Bad";

let review = ''
let rating = 2;

if (rating>5){
	 review = review_positive;
}
else
{
	 review = review_negative;	
}

//h1.innerHTML = `The movie is ${review}`


Name = "Vijay Kumar Pandey"
experience = 3
skills = "Javascript"
//h1.innerHTML = `My Name is ${Name}, I have ${experience} years of Experience in ${skills}`




let data = document.getElementById('data')

//String Method


	//Length of the String
	let len = Name.length


	// Accessing the charecter within a string
	let acces_char = Name[2]


	// Upppercase
	let lower = Name.toLowerCase()


	// Fetch the Data within the String
	let subr = Name.substr(6,4)		//==> Starting index, Length



	// Split
	//console.log(Name.split(''))




	data.innerHTML = `Name of the person is ${Name}, 2nd Charecter is ${acces_char}, 
	and lower case of the Name is ${lower}`



	data.innerHTML = `Name of the person is `+Name+`, 2nd Charecter is `+acces_char+`, 
	and lower case of the Name is `+ lower



	Name = "   India                 "
	Trimmed_Name = Name.trim()
	//console.log(Name, Name.length, Trimmed_Name, Trimmed_Name.length)


	console.log(multi_line1.includes('free'))


























