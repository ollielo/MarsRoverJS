/**
 * Created by ollie on 2/22/15.
 */

var North = {name: "North"};
North.advance = function(dir) {
    return {
        'f': {x: 0, y: 1},
        'b': {x: 0, y: -1}
    }[dir];
};

function Orientation(orient) {
    return {
        "N": Orientation.North
    }[orient];
}

Orientation.North = North;

module.exports = Orientation;