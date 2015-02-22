/**
 * Created by ollie on 2/22/15.
 */

var Rover = require('../classes/Rover');

describe('A Mars Rover', function () {
    describe('Constructor', function () {
        it('should initialize the Rover with the given position and orientation', function () {
            var rover = new Rover(0, 0, 'N');
        })
    })
});