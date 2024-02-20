import { Position } from "../types";

// Returns the positions, which form a regular cross within a space composed of rows and cols (2D).
//
// Assumptions:
// - The space is square, i.e. it has the same number of rows as cols.
// - The number of rows and cols is odd.
// - empty border is the number of rows and cols to be left empty at the border of the space.
// - empty border is less than or equal to the dimension of the space.
// - empty border is an odd number or 0.
//
// If not, the function returns an empty array.
export default (dimension: number, emptyBorder: number = 0) => {
    let _positions: Position[] = [];

    if (!(dimension % 2) || emptyBorder % 2 || dimension - emptyBorder * 2 < 1 || emptyBorder < 0) {
        return _positions;
    }

    let _rightPosition = emptyBorder;
    let _topPosition = emptyBorder;

    while (_topPosition !== dimension - _topPosition - 1) {
        _positions.push({
            row: _topPosition,
            col: _rightPosition,
        });

        _positions.push({
            row: _topPosition,
            col: dimension - _rightPosition - 1,
        });

        _positions.push({
            row: dimension - _topPosition - 1,
            col: _rightPosition,
        });

        _positions.push({
            row: dimension - _topPosition - 1,
            col: dimension - _rightPosition - 1,
        });

        _rightPosition++;
        _topPosition++;
    }

    _positions.push({
        row: _rightPosition,
        col: _topPosition,
    });

    return _positions;
};
