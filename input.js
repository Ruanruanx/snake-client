const { connect } = require("http2");

const stdin = process.stdin;
let connection;

const setupInput = function(conn) {
  connection = conn;
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
    if (key === 'w') {
      //console.log(key);
      connection.write("Move: up")
    }
    if (key === 'a') {
      //console.log(key);
      connection.write("Move: left")
    }
    if (key === 's') {
      connection.write("Move: down")
    }
    if (key === 'd') {
      connection.write("Move: right")
    }
    if (key === 'x') {
      connection.write("Say: ops")
    }
    if (key === 'b') {
      connection.write("Say: bab")
    }
  })
}

module.exports = { setupInput };