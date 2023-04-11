const express = require("./app.js");
const app = module.exports(express);

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);

module.exports = app;
