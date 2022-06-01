/*
	for Loop
	for in loop
	for of loop

	While Loop
	do while Loop

	continue
	break
*/

// for (initial value, condition to stop, how many times to execute){
// }



let contries = ["IND","CHN","PAK","SL","AUS","UK","USA","NL"]

// for (let i=0; i<contries.length; i++){
// 	console.log("The serial number of the country = "+i +" "+contries[i])
// }

// for (let i in contries){
//  	console.log("The country "+i +" ==> "+contries[i])
// }

// for (let country of contries){
//  	console.log("The country "+country)
// }



//while loop
drive =  true
counter = 0


// function check_petrol(){
// 	return false
// }


// while (drive == true){
// 	console.log("Running")
// 	drive = check_petrol()
// }

// i = contries.length


// while (i < contries.length){
// 	console.log("Hello")
// }

// i = contries.length

// do {
// 	console.log("Hiiii")
// }
// while(i < contries.length)




for (let country of contries){
	
	if (country == "AUS"){
		continue	
	}
	console.log("The country "+country)

}

break 		==> It will terminates the execution of the loop
continue 	==> It will skip the execution of the particular
				iteration of the loop


