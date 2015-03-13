/**
 * Created by ollie on 2/22/15.
 */

var Orientation = require('./Orientation');
var Position = require('./Position');
var World = require('./World');

function Rover(x, y, orientation, world) {
    this.position = new Position(x, y);
    this.orientation = new Orientation(orientation);
    
    if (world == undefined) {
        world = new World();
    }

    // The parameter 'world' is actually a copy of the reference to the object
    // in the caller. If we assign world to an instance variable like:
    // this.world = world;
    // We are actually saving another copy of the reference, not the object.
    // This means that our 'world' may change without our knowledge.
    
    this.receiveCommands = function (cmds) {
        // 'this' in the callback function in .forEach does not refer to the
        // Rover object, it refers to the global object We have to save the
        // reference to the Rover as some local variable.
        // var that = this;
        
        // An alternative solution is to use the thisArg of forEach()
        cmds.split('').forEach(function (cmd) {
            if (cmd == 'f' || cmd == 'b') {
                var advance = this.orientation.advance(cmd);
                this.position =  world.proceed(this.position, advance);
            }
            if (cmd == 'l' || cmd == 'r') {
                this.orientation = this.orientation.turn(cmd);
            }
        }, this);
    }
}

module.exports = Rover;