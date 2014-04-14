var fs = require('fs'),
    readline = require('readline');

var Card = require('./lib/card'),
    Stack = require('./lib/stack');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.setPrompt('CardManager> ');
// rl.prompt();

// rl.on('line', function(line) {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log('nope, didn\'nt get that');
//   }
//   rl.prompt();
// });
