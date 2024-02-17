import { Commeth, Polyannet, Soloon } from "../astros";
import { UNIVERSE_START } from "../config/constants";

class MetaVerse2d {
    private rows: number;
    private cols: number;

    private universe: Array<Array<any>>;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;

        if (rows < UNIVERSE_START || cols < UNIVERSE_START) {
            throw new Error("Invalid universe size");
        }

        this.universe = new Array(rows).fill(new Array(cols).fill(null));
    }

    public addAstro(astro: Commeth | Polyannet | Soloon) {
        this.universe[astro.Position.row + UNIVERSE_START][astro.Position.col + UNIVERSE_START] = astro;
    }

    public getAstro(row: number, col: number) {
        return this.universe[row + UNIVERSE_START][col + UNIVERSE_START];
    }
}
