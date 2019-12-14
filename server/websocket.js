/*
	Modify this server so that:
	- It stores connections to the array
	- On one second intervals send a random number between 20-180 to all connected clients
	- Modify your client (../wwwroot/scripts/js5.js) accordingly 
*/

module.exports=function(port){
	let ws = require("nodejs-websocket")

	ws.createServer(function (conn) {
		console.log("New connection");
		conn.on("text", function (str) {
			console.log("Received "+str)
			conn.sendText(str.toUpperCase()+"!!!")
		})
		conn.on("close", function (code, reason) {
			console.log("Connection closed")
		})
	}).listen(port);
	console.log("WebSocket server listening port "+port);
}