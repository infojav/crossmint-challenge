import MetaverseApi from "../api/metaverseApi";
import { AstroDescription, AstroObject, Color, Cometh, Direction, Polyanet, Position, Soloon } from "../astros";

export class Metaverse2d {
    private _api: MetaverseApi;

    constructor() {
        this._api = MetaverseApi.getInstance();
    }

    async addPolyannet(position: Position) {
        const polyannet = new Polyanet(position);
        const response = await this._api.addAstro(polyannet);
        return response;
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

    async getGoal(): Promise<{ goal: Array<Array<AstroDescription>> }> {
        return this._api.getGoal();
    }

    async getCurrentMap(): Promise<{ map: { content: Array<Array<AstroObject>> } }> {
        return this._api.getCurrentMap();
    }
}
