const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    //send name to server
    conn.write("Name: xzr");

    setTimeout(()=>{
      conn.write("Move: up");
    },50);

    setTimeout(()=>{
      conn.write("Move: up");
    },100);
    
  })
//present incoming data
  conn.on('data', (data) => {
    console.log(data);
  }) 

  return conn;
};


console.log("Connecting ...");
connect();

module.exports = connect;