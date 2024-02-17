import { UNIVERSE_START } from "../config/constants";
import { AstralType, Position } from "../types";

export abstract class AstralObject {
    private position: Position;

    constructor(position: Position) {
        if (position.row < UNIVERSE_START || position.col < UNIVERSE_START) {
            throw new Error("Invalid position");
        }

        this.position = position;
    }

    abstract get type(): AstralType;

    get Position() {
        return { row: this.position.row, col: this.position.col };
    }
}
