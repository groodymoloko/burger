const express = require("express");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8080;

let app = express();

// serve static content for the app from the "public" directory (CSS, etc.)
app.use(express.static("public"));
app.use(methodOverride("_method"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server so that it can begin listening to client requests
app.listen(PORT, function() {
  console.log("EatDaBurger listening on: http://localhost:" + PORT);
});