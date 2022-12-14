const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    //host: "localhost",// IP address here,
    host: IP,
    //port: 50541// PORT number here,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");

    //send name to server
    conn.write("Name: xzr");
    //setInterval to move up automatically
    //setInterval(() => { conn.write("Move: up") }, 50)
  })

  //present incoming data
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = { connect };