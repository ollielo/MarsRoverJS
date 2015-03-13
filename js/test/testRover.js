/**
 * Created by ollie on 2/22/15.
 */
var Orientation = require('../classes/Orientation');
var Position = require('../classes/Position');
var World = require('../classes/World');
var Rover = require('../classes/Rover');

describe('A Mars Rover', function () {
    describe('Constructor', function () {
        it('should initialize the Rover with the given position and orientation', function () {
            var rover = new Rover(0, 0, 'N');
            rover.position.should.eql(new Position(0, 0))
;            rover.orientation.should.be.exactly(Orientation.North);
        });
    });

    describe('Receives Commands', function () {
        it('should receive a character string of commands', function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('frbl');
        });
    });

    describe('Executes Commands', function () {
        it("should react to multiple commands in the string", function () {
            var rover = new Rover(0, 0, 'N');
            rover.receiveCommands('fff');
            rover.position.should.eql(new Position(0, 3));
        });
    });

    describe("Moves", function () {
        describe('When the Rover is facing North', function () {
            describe('A Forward command', function () {
                it("should increase Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'N');
                    rover.receiveCommands('f');
                    rover.position.should.eql(new Position(0, 1));
                    rover.orientation.should.be.exactly(Orientation.North);
                });
            });
            describe('A Backward command', function () {
                it("should decrease Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'N');
                    rover.receiveCommands('b');
                    rover.position.should.eql(new Position(0, -1));
                    rover.orientation.should.be.exactly(Orientation.North);
                });
            });
        });

        describe('When the Rover is facing South', function () {
            describe('A Forward command', function () {
                it("should decrease Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'S');
                    rover.receiveCommands('f');
                    rover.position.should.eql(new Position(0, -1));
                    rover.orientation.should.be.exactly(Orientation.South);
                });
            });
            describe('A Backward command', function () {
                it("should increase Rover's y position by 1 unit", function () {
                    var rover = new Rover(0, 0, 'S');
                    rover.receiveCommands('b');
                    rover.position.should.eql(new Position(0, 1));
                    rover.orientation.should.be.exactly(Orientation.South);
                });
            });
        });
    });
    
    describe("Turns", function () {
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

    describe("In a finite Mars world", function () {
        var world;
        
        beforeEach(function () {
           world =  new World(-2, -2, 2, 2);
        });
        
        it("should wrap around when moving beyond North edge", function () {
            var rover = new Rover(0, 0, 'N', world);
            rover.receiveCommands('fff');
            rover.position.should.eql(new Position(0, -2));
        });
        it("should wrap around when moving beyond South edge", function () {
            var rover = new Rover(0, 0, 'N', world);
            rover.receiveCommands('bbb');
            rover.position.should.eql(new Position(0, 2));
        });
        it("should wrap around when moving beyond East edge", function () {
            var rover = new Rover(0, 0, 'E', world);
            rover.receiveCommands('fff');
            rover.position.should.eql(new Position(-2, 0));

        });
        it("should wrap around when moving beyond West edge", function () {
            var rover = new Rover(0, 0, 'E', world);
            rover.receiveCommands('bbb');
            rover.position.should.eql(new Position(2, 0));
        });
    });
    
    describe("In a dangerous Infinite world with obstacles", function () {
        it("should be able to add an obstacle anywhere in the Infinite world", function () {
            var world = new World();
            world.addObstacle(123, 456);
        });
        it("should block the rover when it faces the obstacle", function () {
            var world = new World();
            world.addObstacle(0, 2);
            var rover = new Rover(0, 0, 'N', world);
            rover.receiveCommands('ffffff');
            rover.position.should.eql(new Position(0, 1));
        });
    });
    
    describe("In a dangerous Limited World with obstacles", function () {
        it("should be able to add an obstacle anywhere inside a finite world", function () {
            var world = new World(-2, -2, 3, 3);
            world.addObstacle(1, 1);
        });
        it("should block the rover when it faces the obstacle", function () {
            var world = new World(-2, -2, 3, 3);
            world.addObstacle(2, 0);
            var rover = new Rover(0, 0, 'E', world);
            rover.receiveCommands('fffff');
            rover.position.should.eql(new Position(1, 0));
        })
    });
});