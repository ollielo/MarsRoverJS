/**
 * Created by ollie on 2/22/15.
 */

var Orientation = require('./Orientation');

function Rover(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = new Orientation(orientation);
    
    this.receiveCommands = function (cmds) {
        if (cmds == 'f' || cmds == 'b') {
            var advance = this.orientation.advance(cmds);
            this.x += advance.x;
            this.y += advance.y;
        }
    }
}

module.exports = Rover;