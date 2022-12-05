let http=require('http');
let dt=require('./myfirstmodule');
let url =require('url')

http.createServer(function(req,res){
    res.writeHead(200,{'Contemt-Type':'text/html'});
    let q=url.parse(req.url,true).query;
    let txt=q.a + ' ' + q.b 
    res.write(txt);
    res.end();

}).listen(7000);