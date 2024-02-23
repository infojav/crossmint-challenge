import { Astro } from "./Astro";
import { AstralType, Direction, Position } from "./types";

export class Commeth extends Astro {
    private _direction: Direction;

    constructor(position: Position, direction: Direction) {
        super(position);
        this._direction = direction;
    }

    get type(): AstralType {
        return "commETH";
    }

    get direction(): Direction {
        return this._direction;
    }
}
