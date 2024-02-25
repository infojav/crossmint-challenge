import { appConfig } from "../config";
import { AstralType, Color, Direction, Position } from "./types";

export interface AstralObject {
    type: AstralType;
    position: Position;
    color?: Color;
    direction?: Direction;
}

export abstract class Astro implements AstralObject {
    private _position: Position;

    constructor(position: Position) {
        if (position.row < appConfig.UNIVERSE_START || position.column < appConfig.UNIVERSE_START) {
            throw new Error("Invalid position");
        }

        this._position = position;
    }

    abstract get type(): AstralType;

    get position(): Position {
        return this._position;
    }
}
