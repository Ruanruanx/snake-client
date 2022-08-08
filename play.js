const connect = require('./client.js');
const stdin = process.stdin;

const setupInput = function() {
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function(key) {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })

}

setupInput();