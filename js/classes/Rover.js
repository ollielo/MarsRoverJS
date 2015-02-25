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
        // reference to the Rover as that.
        // var that = this;
        
        // An alternative solution is to use the thisArg of forEach()
        cmds.split('').forEach(function (cmd) {
            if (cmd == 'f' || cmd == 'b') {
                var advance = this.orientation.advance(cmd);
                this.x += advance.x;
                this.y += advance.y;
            }
            if (cmd == 'l' || cmd == 'r') {
                this.orientation = this.orientation.turn(cmd);
            }
        }, this);
    }
}

module.exports = Rover;