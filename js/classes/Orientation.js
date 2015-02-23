/**
 * Created by ollie on 2/22/15.
 */

var North = {name: "North"};

function Orientation(orient) {
    return {
        "N": Orientation.North
    }[orient];
}

Orientation.North = North;

module.exports = Orientation;