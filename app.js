/**
 * Created by loutao on 2017/3/21.
 */

var http = require('http');

var port = 3000;

http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end('<h1>Hello</h1>')

}).listen(port, function () {
   console.log('server start on', port)
});