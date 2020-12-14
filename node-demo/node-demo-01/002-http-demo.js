var http = require("http");

var server = http.createServer(function(req, res) {
	// req 是请求
	// res 是响应
	console.log("来了一个请求, " + req.url);
	res.end("Hello World");

});

// 启动服务器，监听8888端口
server.listen(8888, "127.0.0.1");