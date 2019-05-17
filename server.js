const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const bodyParser = require("body-parser");

const myDbSettings = require("./config/database");
const users = require("./routes/users");

const app = express();

// Loading database values
var dbOptions = {
  host: myDbSettings.host,
  user: myDbSettings.user,
  password: myDbSettings.password,
  port: myDbSettings.port,
  database: myDbSettings.db
};

// single: Single database connection which is never closed.
// pool: Pool of connections is auto release when response ends.
// request: New connection per new request is auto close when response ends.
app.use(myConnection(mysql, dbOptions, "pool"));

// body-parser module is used to read HTTP POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
