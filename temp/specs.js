/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chai = __webpack_require__(2);

var _hello_world = __webpack_require__(3);

var _env = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("hello world", () => {
  it("greets", () => {
    (0, _chai.expect)((0, _hello_world.greet)()).to.equal("Hello World!");
  });
  it("says goodbye", () => {
    (0, _chai.expect)((0, _hello_world.bye)()).to.equal("See ya!");
  });
  it("should load test environment variables", () => {
    (0, _chai.expect)(_env.default.name).to.equal("test");
    (0, _chai.expect)(_env.default.description).to.equal("Add here any environment specific stuff you like.");
  });
  it("babel features should work", () => {
    const a = {
      a: 1
    };
    const b = Object.assign({}, a, {
      b: 2
    });
    (0, _chai.expect)(b).to.eql({
      a: 1,
      b: 2
    });
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bye = exports.greet = void 0;

const greet = () => {
  return "Hello World!";
};

exports.greet = greet;

const bye = () => {
  return "See ya!";
};

exports.bye = bye;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"test","description":"Add here any environment specific stuff you like."}

/***/ })
/******/ ]);
//# sourceMappingURL=specs.js.map