const fs = require('fs');
const http = require("http");
const PORT = 4000;

const server = http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile('index.html', function(error, data){
        if (error){
            console.log(error, "This was the error")
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

 

        res.write(data);
        return res.end();
    })






    }

});



server.listen(PORT, function(){
    console.log(`server running at port ${PORT}`);
});