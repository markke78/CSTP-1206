// Importing http module from node.js to our project
const http = require("http");
const PORT = 5000;

// Create a server 
const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html");

    if (request.url === "/") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve
       

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello World!! </h1>")

        // Ending the response
        response.end();
    }

    if (request.url === "/dogs") {

        // We are sending a response to the client/browser using response.write
        response.write("<div><img src='https://thehappypuppysite.com/wp-content/uploads/2018/06/Shiba-Inu-Wonderful-Watchdog-or-Family-Pet_-HP-long-1024x488.jpg' width='500px'></div>")

        // Ending the response
        response.end();
    }

    if (request.url === "/cats") {

        // We are sending a response to the client/browser using response.write
        response.write("<div><img src='https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg' width='500px'></div>")

        // Ending the response
        response.end();
    }
})

// Listen a server
server.listen(PORT, () => {
    console.log("My Server is running on port", PORT);
})