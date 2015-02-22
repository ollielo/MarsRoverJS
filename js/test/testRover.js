/**
 * Created by ollie on 2/22/15.
 */

var Rover = require('../classes/Rover');

describe('A Mars Rover', function () {
    describe('Constructor', function () {
        it('should initialize the Rover with the given position and orientation', function () {
            var rover = new Rover(0, 0, 'N');
            rover.x.should.be.exactly(0);
            rover.y.should.be.exactly(0);
            rover.orientation.should.be.exactly('N');
        });
    });
    
    describe('Receives Commands', function () {
        it('should receive a character string of commands', function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('frbl');
        });
        
        describe('When the Rover is facing North', function () {
            describe('A Forward command', function () {
                it("should increase Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'N');
                    rover.receiveCommands('f');
                    rover.x.should.be.exactly(0);
                    rover.y.should.be.exactly(1);
                    rover.orientation.should.be.exactly('N');
                });
            });
            describe('A Backward command', function () {
                it("should decrease Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'N');
                    rover.receiveCommands('b');
                    rover.x.should.be.exactly(0);
                    rover.y.should.be.exactly(-1);
                    rover.orientation.should.be.exactly('N');
                })
            })
        });

    })
});