/*
	SET
	Set is a collection of unordered unique elements


Set Methods
	new Set()	Creates a new Set
	add()	Adds a new element to the Set
	delete()	Removes an element from a Set
	has()		Returns true if a value exists
	clear()		Removes all elements from a Set
	forEach()	Invokes a callback for each element
	values()	Returns an Iterator with all the values in a Set
	keys()		Same as values()
	entries()	Returns an Iterator with the [value,value] pairs from a Set

*/



let set_a = new Set()
console.log("the value of set_a = ", set_a)


let countries = ['India', 'PK', "SL", "AUS", "NL", "SA",'India', 'PK', "SL"]

let set_b = new Set(countries)
console.log("the value of countries array = ", countries)
let countries2 = {}
console.log("the type of countries2 = ", typeof(countries2))


set_b.add("UK")
set_b.delete("India")
console.log("the value of set_b = ", set_b)

let states_capitals = [
					["Karnataka", "Banagalore"],
					["ASSAM", "Dispur"],
					["Sikkim", "Gangtok"],
					["Meghalaya", "Shillong"]
				]

let states_capitals_map = new Map(states_capitals)
console.log(states_capitals_map)


for (const [state, capital] of states_capitals_map){
	console.log(`The capital city of ${state} = ${capital}` )
}

//console.log(states_capitals_map.get("Karnataka"))



delete states_capitals_map


console.log(states_capitals_map)
