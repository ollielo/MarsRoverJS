/**
 * Created by ollie on 2/25/15.
 */

var InfiniteWorld = {
    proceed: function(position, advance) {
        var x = position.x + advance.x;
        var y = position.y + advance.y;

        for (var i = 0; i < this.obstacle.length; i++) {
            if (this.obstacle[i].x == x && this.obstacle[i].y == y) {
                return position;
            }
        }
        return {x: x, y: y};
    },

    obstacle: [],

    addObstacle: function(x, y) {
        this.obstacle.push({x: x, y: y})
    }
};

function LimitedWorld(xmin, ymin, xmax, ymax) {
    // Since we have no intention to change the size of the World, we don't 
    // really need to have the parameters as instance variables. proceed() will
    // automatically capture those "free variables". Thus, xmin etc. are
    // essentially "private variables" of the object. They can not be accessed
    // by other objects since they are not the public "properties" of the object.
    
    // The question is, are variables passed by value or reference? Will, say,
    // xmax be changed under us? The answer is NO. For parameters of primitive
    // types, they are passed by value. Thus xmax is a local copy that's only
    // available to the constructor.
    this.proceed = function(position, advance) {
        var x = position.x + advance.x;
        var y = position.y + advance.y;

        if (x > xmax) {
            x = xmin + (x - xmax - 1);
        } else if (x < xmin) {
            x = xmax + (x - xmin + 1);
        }
        
        if (y > ymax) {
            y = ymin + (y - ymax - 1);
        } else if (y < ymin) {
            y = ymax + (y - ymin + 1);
        }
        
        for (var i = 0; i < this.obstacle.length; i++) {
            if (this.obstacle[i].x == x && this.obstacle[i].y == y) {
                return position;
            }
        }
        
        return {x: x, y: y};
    };

    this.obstacle = [];

    this.addObstacle = function (x, y) {
        this.obstacle.push({x: x, y: y});
    }
}

function World(xmin, ymin, xmax, ymax) {
    if (arguments.length == 0) {
        return InfiniteWorld;
    } else {
        return new LimitedWorld(xmin, ymin, xmax, ymax);
    }
}

module.exports = World;

