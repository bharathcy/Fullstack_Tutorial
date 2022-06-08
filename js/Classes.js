class vehicle {
	constructor(b, y){
		this.brand =  b
		this.year =  y
		this.speed = "0kms"
		this.wheels = 0
	}

	display_vehicle_details(){
		this.speed = "20kms"
		console.log(`Vehicle ${this.brand}, speed: ${this.speed}`)
	}

	set_wheels(wls){

	}

	get_wheels(){
		console.log("Number of Wheels :"+this.wheels)
	}


	static move()
	{
		console.log("This is moves on Roads")
	}
}




class bikes extends vehicle{
	display_vehicle_details(){
		console.log(`Hello`)
	}

	set_handle_width(l){
	}

	get_handle_width(){
	}
}



// Instatiation ==> Creating the object from a class
// bikes extends vehicle
// 		==> bikes is derrived from the Vehicle class
//		==> Bikes is child class / Derrived class
//		==> Vehical is Parent class
//		==> Constructor 	==> It is builtin function which is used to initialise Class attributes
//		==> Super() 		==> It is builtin function for extended classes
//							To call constructor of parent's class
//		==>	extends 		==> Inheriting the propeties and behavious of parent class				
//		==> Base = parent 	== super
//		==> overloading 	==> using the same name for functions in child class
//		==> Static methods 	==>  Belongs to Class not the object, 
//								hence we are not allowed to use "this" keyword


let v1 = new vehicle()
let two_wheeler = new bikes()

v1.display_vehicle_details()
two_wheeler.display_vehicle_details()




function something(a,b,c){

	console.log(a,b,"Hello world")
}

something(10,20,30)

constructor(a,b,c,d){
	this.brand =  a
	this.year =  b
	this.speed = "0kms"
	this.wheels = 0
}


