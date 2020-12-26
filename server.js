const http = require("http");
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.method);
  response.end("Hello world");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log("something went wrong", err);
  }

  console.log(`server is listening on ${port}`);
});
