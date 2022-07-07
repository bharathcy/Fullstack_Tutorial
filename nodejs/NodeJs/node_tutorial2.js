let mod = require('./module1')

let l = mod.l
let m = mod.multiplication
let student1 = new mod.student(20,30)

l(mod.add(2, 3))
l(mod.substraction(2, 3))
l(m(2, 3))
l(mod.division(2,3))
l(mod.x)
student1.print()

a = mod2.reduce([20, 10, 5, 30, 60])
b = mod2.filter([20, 10, 5, 30, 60])
c = mod2.map([20, 10, 5, 30, 60])

l(`The output of reduce fuction = ${a}`)
l(`The output of filter fuction = ${b}`)
l(`The output of map fuction = ${c}`)

let mod_5 = require('module_x')