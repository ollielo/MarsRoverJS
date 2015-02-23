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
    });
});