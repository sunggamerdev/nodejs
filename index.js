const http = require('http');
const server = http.createServer(function(req, res) {
   res.write('<p style="color:gold;"> ');
   res.write (`Hello from NODE SERVERdddddd</p>`);
   res.end();
})
server.listen(7000,()=>{
   console.log("Start server in port 7000");
});