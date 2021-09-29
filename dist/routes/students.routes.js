"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _student = _interopRequireDefault(require("../services/student.service"));

var _student2 = require("../controllers/student.controller");

var _express = require("express");

var router = (0, _express.Router)();
var studentController = (0, _student2.getStudents)((0, _student["default"])());
router.get("/", studentController);
var _default = router;
exports["default"] = _default;