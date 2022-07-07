log = (data) => console.log(data)

addition = (a, b) => a + b
substraction = (a, b) => a - b
multiplication = (a, b) => a * b
division = (a, b) => a / b


x = 20

exports.x = x

exports.l = log
exports.add = addition
exports.substraction = substraction
exports.multiplication = multiplication
exports.division = division


class st{
	constructor(first, second){
		this.a = first
		this.b = second
	}

	print()
	{
		console.log(`the value of a , b is ${this.a}, ${this.b}`)
	}
}

exports.student = st