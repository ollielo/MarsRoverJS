/**
 * Created by ollie on 2/25/15.
 */

function World(xmin, ymin, xmax, ymax) {
    // Since we have no intention to change the size of the World, we don't 
    // really need to have the parameters as instance variables. proceed() will
    // automatically capture those "free variables". Thus, xmin etc. are
    // essentially "private variables" of the object. They can not be accessed
    // by other objects since they are the public "properties" of the object.
    
    // The question is, are variables passed by value or reference? Will, say,
    // xmax be changed under us? The answer is NO. For parameters of primitive
    // types, they are passed by value. Thus xmax is a local copy that's only
    // available to the constructor.
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

