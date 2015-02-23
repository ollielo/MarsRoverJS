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
});