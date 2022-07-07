let reduce = (x) => x.reduce((total, i)=> total + i)
let filter = (x) => x.filter(i => i > 20)
let map = (x) => x.map(i=> i*i)


exports.reduce = reduce
exports.filter = filter
exports.map = map