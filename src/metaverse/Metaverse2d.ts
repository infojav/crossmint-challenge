import { MegaverseCreator } from "../api/megaverseCreator";
import { Color, Commeth, Direction, Polyannet, Position, Soloon } from "../astros";

export class Metaverse2d {
    private _api: MegaverseCreator;

    constructor() {
        this._api = MegaverseCreator.Instance;
    }

    async addPolyannet(position: Position) {
        const polyannet = new Polyannet(position);
        return this._api.addAstro(polyannet);
    }

    async addSoloon(position: Position, color: Color) {
        const soloon = new Soloon(position, color);
        return await this._api.addAstro(soloon);
    }

    async addCommeth(position: Position, direction: Direction) {
        const commeth = new Commeth(position, direction);
        return await this._api.addAstro(commeth);
    }

    async deletePolyannet(position: Position) {
        return this._api.deletePolyannet(position);
    }

    async deleteSoloon(position: Position) {
        return this._api.deleteSoloon(position);
    }

    async deleteCommeth(position: Position) {
        return this._api.deleteCommeth(position);
    }
}
