var Snake = require('./snake');
var Board = require('./board');
var View = require('./view');
// var Game = require('../../ttt-core-solution/game');

(function () {
  var snake = new Snake();
  var board = new Board(snake);

  var el = ".snake";

  var view = $l(function() {
    new View(board, el);
  });
})();
