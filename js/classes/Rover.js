/**
 * Created by ollie on 2/22/15.
 */

function Rover(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    
    this.receiveCommands = function (cmds) {
        if (orientation == 'N') {
            if (cmds == 'f') {
                this.y += 1;
            }
        }
    }
}

module.exports = Rover;