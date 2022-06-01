/*--------------------------------------------------------------------------------
									String to Array
--------------------------------------------------------------------------------*/	
let inp = "Bharath CY"
//console.log(inp.split(''))
//console.log([...inp])

/*--------------------------------------------------------------------------------
									Check the ouput
--------------------------------------------------------------------------------*/
let abc
let ghi = new Array(3)
let jkl = {}
let lmn = ""
let opq = 0
let rst = false
let def = null				//***********IMP************


// console.log(abc, def)
// console.log(abc == def)
// console.log("type of abc => ", typeof(abc))
// console.log("type of def => ", typeof(def))
// console.log("type of ghi => ", typeof(ghi))
// console.log("type of jkl => ", typeof(jkl))
// console.log("type of lmn => ", typeof(lmn))
// console.log("type of opq => ", typeof(opq))
// console.log("type of rst => ", typeof(rst))



/*--------------------------------------------------------------------------------
									Remove Duplicates
--------------------------------------------------------------------------------*/
const removeDuplicate = []
array_name = [1, 3, 5, 77, 5, 77, 86, 3, 90]
output_array = array_name.filter((element, index) => array_name.indexOf(element) == index);
//console.log(output_array)


/*--------------------------------------------------------------------------------
									Reverse a string in JS
--------------------------------------------------------------------------------*/
reverse_string = (inp) => [...inp].reverse().join('')
output = reverse_string("Bharath CY")
//console.log(output)


/*--------------------------------------------------------------------------------
									Palindrome
--------------------------------------------------------------------------------*/
palindrome = (inp) => inp === inp.split('').reverse().join('')


output = palindrome("CABBAGE")
//console.log(output)


	
/*--------------------------------------------------------------------------------
						Palindrome without using builtin functions	
--------------------------------------------------------------------------------*/
palindrome_without_default_methods = (inp) => {
	for (var i = 0; i < inp.length / 2; i++) {
		if (inp[i] !== inp[inp.length - 1 - i]) {
			return "It's not a palindrome";
            }
		}
		return "It's a palindrome"
	}
	output = palindrome_without_default_methods("ABCBA")
	//console.log(output)


/*--------------------------------------------------------------------------------
						Count the frequency in an array	
--------------------------------------------------------------------------------*/
const counts = {};
const sampleArray = ['a', 'a', 'b', 'c','a','d','d'];
sampleArray.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
//console.log(counts)


/*--------------------------------------------------------------------------------
									Anagram
--------------------------------------------------------------------------------*/
function anagram (inp_array) {
    var output = {};
    for (var i = 0; i < inp_array.length; i++) {
        var word = inp_array[i].split('').sort().join('');
        !output.hasOwnProperty(word) ? output[word] = []: null
        output[word].push(inp_array[i])
    }    
    return output;
}

Example_Output = anagram(['kmno', 'okmn', 'omkn', 'dell', 'ledl', 'elld', 'ko'])
//console.log(Example_Output)








/*--------------------------------------------------------------------------------
								Armstrong 3 digit Number
--------------------------------------------------------------------------------*/

function Armstrong(original_number){
	let sum = 0;
	let temporary_number = original_number;
	while (temporary_number > 0) {
		//Fetch Last Digit
	    let remainder = temporary_number % 10;


		const const_remainder = remainder
	    for (let i=1; i<original_number.toString().length;i++){
	    	//multiply the number on its length times
	    	remainder = const_remainder * remainder
	    }
	
	    //add the multiplied numbers
	    sum += remainder;
	    

	    //Remove The Last Digit
	    temporary_number = parseInt(temporary_number / 10);	
	
	}

	if (sum == original_number)
	{
	    console.log(`${original_number} is an Armstrong number`);
	}
	else
	{
	    console.log(`${original_number} is not an Armstrong number.`);
	}
}
Armstrong(896)
/*--------------------------------------------------------------------------------
									Chess board Layout
--------------------------------------------------------------------------------*/

var table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.style.backgroundColor = "white";
            td.style.height = "100px";
            td.style.width = "100px";
        } else {
            td.style.backgroundColor = "black";
            td.style.height = "100px";
            td.style.width = "100px";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.style.border = "1px solid grey";
table.style.margin = "auto";
container = document.getElementById('container')
container.appendChild(table);