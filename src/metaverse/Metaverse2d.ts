import { Commeth, Polyannet, Soloon } from "../astros";
import { MAX_UNIVERSE_SIZE, UNIVERSE_START } from "../config/constants";
import { Position } from "../types";

export class Metaverse2d {
    private rows: number;
    private cols: number;

    private universe: Array<Array<Commeth | Polyannet | Soloon>>;

    private validateUniverseSize(rows: number, cols: number) {
        if (this.rows < UNIVERSE_START || this.cols < UNIVERSE_START || this.rows * this.cols > MAX_UNIVERSE_SIZE) {
            throw new Error("Invalid universe size");
        }
    }

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;

        this.validateUniverseSize(rows, cols);
        this.universe = new Array(rows).fill(new Array(cols).fill(null));
    }

    addAstro(astro: Commeth | Polyannet | Soloon, position: Position) {
        const row = position.row + UNIVERSE_START;
        const col = position.col + UNIVERSE_START;

        this.universe[row][col] = astro;
    }

    hasAstro(position: Position) {
        const row = position.row + UNIVERSE_START;
        const col = position.col + UNIVERSE_START;

        return this.universe[row][col];
    }

    get width() {
        return this.rows;
    }

    get height() {
        return this.cols;
    }
}
