var http = require("http");
var fs = require('fs');

fs.readFile('./index.html', function(err, html){
	if(err){
		throw err;
	}
	http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(html);
	response.end();
	}).listen(8081);
});


console.log('Server running at http://127.0.0.1:8081');