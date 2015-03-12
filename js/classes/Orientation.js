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
    },
    turn: function(dir) {
        return {
            'l': West,
            'r': East
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
    },
    turn: function(dir) {
        return {
            'l': East,
            'r': West
        }[dir];
    }
};

var East = {
    name: "East",
    advance: function(dir) {
        return {
            'f': {x: 1, y: 0},
            'b': {x: -1, y: 0}
        }[dir];
    },
    turn: function(dir) {
        return {
            'l': North,
            'r': South
        }[dir];
    }
};

var West = {
    name: "West",
    advance: function(dir) {
        return {
            'f': {x: -1, y: 0},
            'b': {x: 1, y: 0}
        }[dir];
    },
    turn: function(dir) {
        return {
            'l': South,
            'r': North
        }[dir];
    }
};

function Orientation(orient) {
    return {
        "N": Orientation.North,
        "S": Orientation.South,
        "E": Orientation.East,
        "W": Orientation.West
    }[orient];
}

Orientation.North = North;
Orientation.South = South;
Orientation.East = East;
Orientation.West = West;

module.exports = Orientation;