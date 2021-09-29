"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _students = _interopRequireDefault(require("./routes/students.routes"));

var _express = _interopRequireDefault(require("express"));

var PORT = 8081;
var HOST = "0.0.0.0";
var app = (0, _express["default"])();
app.use("/students", _students["default"]);
app.listen(PORT, HOST);
console.log("Running on ".concat(PORT));