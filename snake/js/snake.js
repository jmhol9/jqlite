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
