/**
 * Created by ollie on 2/22/15.
 */
var Orientation = require('../classes/Orientation');    
var Rover = require('../classes/Rover');

describe('A Mars Rover', function () {
    describe('Constructor', function () {
        it('should initialize the Rover with the given position and orientation', function () {
            var rover = new Rover(0, 0, 'N');
            rover.x.should.be.exactly(0);
            rover.y.should.be.exactly(0);
            rover.orientation.should.be.exactly(Orientation.North);
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
                    rover.orientation.should.be.exactly(Orientation.North);
                });
            });
            describe('A Backward command', function () {
                it("should decrease Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'N');
                    rover.receiveCommands('b');
                    rover.x.should.be.exactly(0);
                    rover.y.should.be.exactly(-1);
                    rover.orientation.should.be.exactly(Orientation.North);
                });
            });
        });

        describe('When the Rover is facing South', function () {
            describe('A Forward command', function () {
                it("should decrease Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'S');
                    rover.receiveCommands('f');
                    rover.x.should.be.exactly(0);
                    rover.y.should.be.exactly(-1);
                    rover.orientation.should.be.exactly(Orientation.South);
                });
            });
            describe('A Backward command', function () {
                it("should increase Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'S');
                    rover.receiveCommands('b');
                    rover.x.should.be.exactly(0);
                    rover.y.should.be.exactly(1);
                    rover.orientation.should.be.exactly(Orientation.South);
                });
            });
        });

        it("should react to multiple commands", function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('fff');
            rover.x.should.be.exactly(0);
            rover.y.should.be.exactly(3);
        });

        it("should make a right by turning left 3 times", function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('flflfl');
            rover.orientation.should.be.exactly(Orientation.North.turn('r'));
        });
        it("should make a left by turning right 3 times", function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('frfrfr');
            rover.orientation.should.be.exactly(Orientation.North.turn('l'));
        })
    });
});