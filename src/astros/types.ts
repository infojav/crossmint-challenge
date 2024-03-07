export type AstralType = "POLYanet" | "SOLoon" | "comETH";
export type Position = { row: number; column: number };
export type Direction = "up" | "down" | "right" | "left";
export type Color = "blue" | "red" | "purple" | "white";

export type AstroDescription =
    | "POLYANET"
    | "WHITE_SOLOON"
    | "RED_SOLOON"
    | "BLUE_SOLOON"
    | "PURPLE_SOLOON"
    | "UP_COMETH"
    | "DOWN_COMETH"
    | "LEFT_COMETH"
    | "RIGHT_COMETH";

export type AstroObject = {
    type: 0 | 1 | 2;
    color?: Color;
    direction?: Direction;
};
