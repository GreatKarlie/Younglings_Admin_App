const url = require("url");

module.exports = {
  handleRequest(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
  },
};
