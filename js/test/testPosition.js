/**
 * Created by ollie on 2/22/15.
 */

Position = require('../classes/Position');

describe('Position', function () {
   describe('Constructor', function () {
       it('should initialize the x and y component', function () {
           var position = new Position(1, 2);
           position.x.should.be.exactly(1);
           position.y.should.be.exactly(2);
       });
   });
});