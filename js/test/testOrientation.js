/**
 * Created by ollie on 2/22/15.
 */

var Orientation = require('../classes/Orientation');

describe('Orientation', function () {
    describe('Factory', function () {
        it('should accept character "N" and return North', function () {
            var orientation = new Orientation('N');
            orientation.should.be.exactly(Orientation.North);
        });
        it('should accept character "S" and return South', function () {
            var orientation = new Orientation('S');
            orientation.should.be.exactly(Orientation.South);
        });
        it('should accept character "E" and return East', function () {
            var orientation = new Orientation('E');
            orientation.should.be.exactly(Orientation.East);
        });
        it('should accept character "W" and return West', function () {
            var orientation = new Orientation('W');
            orientation.should.be.exactly(Orientation.West);
        })
    });
    
    describe("North", function () {
        it("should advance in y direction when moving forward", function () {
            var advance = Orientation.North.advance('f');
            advance.x.should.be.exactly(0);
            advance.y.should.be.exactly(1);
        });
        it("should advance in -y direction when moving backward", function () {
            var advance = Orientation.North.advance('b');
            advance.x.should.be.exactly(0);
            advance.y.should.be.exactly(-1);
        });
        it("should turn to West after turning left", function () {
            var orientation = Orientation.North;
            orientation.turn('l').should.be.exactly(Orientation.West);
        });
        it("should turn to East after turning right", function () {
            var orientation = Orientation.North;
            orientation.turn('r').should.be.exactly(Orientation.East);
        })
    });
    
    describe("South", function () {
        it('should advance in -y direction when moving forward', function () {
            var advance = Orientation.South.advance('f');
            advance.x.should.be.exactly(0);
            advance.y.should.be.exactly(-1);
        });
        it('should advance in y direction when moving backward', function () {
            var advance = Orientation.South.advance('b');
            advance.x.should.be.exactly(0);
            advance.y.should.be.exactly(1);
        });
        it("should turn into East after turning left", function () {
            var orientation = Orientation.South;
            orientation.turn('l').should.be.exactly(Orientation.East);
        });
        it("should turn into West after turning right", function () {
            var orientation = Orientation.South;
            orientation.turn('r').should.be.exactly(Orientation.West);
        });
    });
    
    describe("East", function () {
        it("should advance in x direction when moving forward", function () {
            var advance = Orientation.East.advance('f');
            advance.x.should.be.exactly(1);
            advance.y.should.be.exactly(0);
        });
        it("should advance in -x direction when moving backward", function () {
            var advance = Orientation.East.advance('b');
            advance.x.should.be.exactly(-1);
            advance.y.should.be.exactly(0);
        });
        it("should turn into North after turning left", function () {
            var orientation = Orientation.East;
            orientation.turn('l').should.be.exactly(Orientation.North);
        });
        it("should turn into South after turning right", function () {
            var orientation = Orientation.East;
            orientation.turn('r').should.be.exactly(Orientation.South);
        });
    });
    
    describe("West", function () {
        it("should advance in -x direction when moving forward", function () {
            var advance = Orientation.West.advance('f');
            advance.x.should.be.exactly(-1);
            advance.y.should.be.exactly(0);
        });
        it("should advance in x direction when moving forward", function () {
            var advance = Orientation.West.advance('b');
            advance.x.should.be.exactly(1);
            advance.y.should.be.exactly(0);
        });
        it("should turn into South after turning left", function () {
            var orientation = Orientation.West;
            orientation.turn('l').should.be.exactly(Orientation.South);
        });
        it("should turn into North after turning right", function () {
            var orientation = Orientation.West;
            orientation.turn('r').should.be.exactly(Orientation.North);
        });
    });
});