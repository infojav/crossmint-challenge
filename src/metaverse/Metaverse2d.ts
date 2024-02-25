import { MegaverseCreator } from "../api/megaverseCreator";
import { Color, Cometh, Direction, Polyanet, Position, Soloon } from "../astros";

export class Metaverse2d {
    private _api: MegaverseCreator;

    constructor() {
        this._api = MegaverseCreator.Instance;
    }

    async addPolyannet(position: Position) {
        const polyannet = new Polyanet(position);
        return this._api.addAstro(polyannet);
    }

    async addSoloon(position: Position, color: Color) {
        const soloon = new Soloon(position, color);
        return await this._api.addAstro(soloon);
    }

    async addCometh(position: Position, direction: Direction) {
        const commeth = new Cometh(position, direction);
        return await this._api.addAstro(commeth);
    }

    async deletePolyanet(position: Position) {
        return this._api.deletePolyanet(position);
    }

    async deleteSoloon(position: Position) {
        return this._api.deleteSoloon(position);
    }

    async deleteCometh(position: Position) {
        return this._api.deleteCometh(position);
    }
}
