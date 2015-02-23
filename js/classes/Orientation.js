/**
 * Created by ollie on 2/22/15.
 */

var North = {
    name: "North",
    advance: function (dir) {
        return {
            'f': {x: 0, y: 1},
            'b': {x: 0, y: -1}
        }[dir];
    }
};

var South = {
    name: "South",
    advance: function(dir) {
        return {
            'f': {x: 0, y: -1},
            'b': {x: 0, y: 1}
        }[dir];
    }
};

var East = {
    name: "East"
};

function Orientation(orient) {
    return {
        "N": Orientation.North,
        "S": Orientation.South,
        "E": Orientation.East
    }[orient];
}

Orientation.North = North;
Orientation.South = South;
Orientation.East = East;

module.exports = Orientation;