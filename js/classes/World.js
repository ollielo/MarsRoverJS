/**
 * Created by ollie on 2/25/15.
 */

function World(xmin, ymin, xmax, ymax) {
    
    this.proceed = function(position, advance) {
        position.x += advance.x;
        position.y += advance.y;
        
        if (position.y > ymax) {
            position.y = ymin + (position.y - ymax - 1);
        } else if (position.y < ymin) {
            position.y = ymax + (position.y - ymin + 1);
        }
        return position;
    }
}

module.exports = World;

