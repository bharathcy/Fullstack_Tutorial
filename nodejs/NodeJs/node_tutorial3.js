let fs = require('fs')

// fs.readFile('some_file.txt', function(err, data) {
// 	if (err) throw err;
//   	console.log(data);
// });


// fs.open('some_file1.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('some_file1.txt has been created!');
// });


// fs.appendFile('some_file1.txt', 'Node JS Tutorial Class 3!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// fs.unlink('some_file1.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });


let os = require('os')
console.log(os.platform())