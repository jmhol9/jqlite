/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Snake = __webpack_require__(1);
	var Board = __webpack_require__(2);
	var View = __webpack_require__(3);
	// var Game = require('../../ttt-core-solution/game');
	
	(function () {
	  var snake = new Snake();
	  var board = new Board(snake);
	
	  var el = ".snake";
	
	  var view = $l(function() {
	    new View(board, el);
	  });
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Snake = function () {
	  this.direction = "W";
	  this.segments = [new Coord([5,5])];
	};
	
	Snake.prototype.move = function () {
	  var newSeg = this.segments[0].plus(this.direction);
	  this.segments.unshift(newSeg);
	  this.segment.pop();
	};
	
	Snake.prototype.turn = function(dir) {
	  this.direction = dir;
	};
	
	
	
	
	
	
	
	
	Coord = function (arr) {
	  this.x = arr[0];
	  this.y = arr[1];
	};
	
	Coord.prototype.plus = function (direction) {
	  var x = this.x;
	  var y = this.y;
	  if (direction === "W") {
	    x -= 1;
	  } else if (direction === "E") {
	    x += 1;
	  } else if (direction === "N") {
	    y -= 1;
	  } else if (direction === "S") {
	    y += 1;
	  }
	
	  return [x, y];
	};
	
	Coord.prototype.equals = function (coord) {
	  if (this.y === coord.y && this.x === coord.x) {
	    return true;
	  }
	
	  return false;
	};
	
	// Coord.prototype.isOpposite = function (coord) {
	//
	// };
	
	
	module.exports = Snake;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Board = function(snake) {
	  this.snake = snake;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	module.exports = Board;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var View = function(board, $el) {
	  this.$el = $el;
	  this.board = board;
	
	  this.setupBoard();
	};
	
	View.prototype.setupBoard = function() {
	  $l(this.$el).append("<ul></ul>");
	  for (i = 0; i < 64; i++) {
	    $l("ul").append("<li></li>");
	  }
	  $l("ul").addClass("group");
	};
	
	View.prototype.snakeOnBoard = function() {
	
	};
	
	View.prototype.parseCoord = function(coord) {
	  return coord.x * 8 + coord.y;
	};
	
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map