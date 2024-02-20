import { AstralType, Color, Position } from "../types";
import { Astro } from "./Astro";

export class Soloon extends Astro {
    private _color: Color;

    constructor(position: Position, color: Color) {
        super(position);
        this._color = color;
    }

    get type(): AstralType {
        return "SOLoon";
    }

    get color(): Color {
        return this._color;
    }
}
