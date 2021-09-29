"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _students = _interopRequireDefault(require("../__mock__/students.mock"));

function studentService() {
  return {
    getStudents: function getStudents() {
      return Promise.resolve(_students["default"]);
    }
  };
}

var _default = studentService;
exports["default"] = _default;