var http = require("http");
// var elem = document.getElementById("MonitorInformation");
// elem.innerHTML = "Setting different HTML content";
// elem.style.color = "Red";
// elem.style.fontSize = "large";

const PORT = 8080;

function handleRequest(request ,response){
	response.font("Red");
	response.end("It works! Path hit:" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});