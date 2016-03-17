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
