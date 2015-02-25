/**
 * Created by ollie on 2/22/15.
 */

var Orientation = require('./Orientation');

function Rover(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = new Orientation(orientation);
    
    this.receiveCommands = function (cmds) {
        // 'this' in the callback function in .forEach does not refer to the
        // Rover object, it refers to the global object We have to save the
        // reference to the Rover as _this.
        var _this = this;
        cmds.split('').forEach(function (cmd) {
            if (cmd == 'f' || cmd == 'b') {
                var advance = _this.orientation.advance(cmd);
                _this.x += advance.x;
                _this.y += advance.y;
            }
            if (cmd == 'l' || cmd == 'r') {
                _this.orientation = _this.orientation.turn(cmd);
            }
        });
    }
}

module.exports = Rover;