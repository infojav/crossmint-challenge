import { AstralObject, AstralType, Position } from "../astros";
import { appConfig } from "../config";
import { logger } from "../utils";

const API = appConfig.CROSSMINT_CHALLENGE_API;
const candidateId = { candidateId: appConfig.CANDIDATE_ID };

const headers = {
    headers: {
        "Content-Type": "application/json",
    },
};

export class MegaverseCreator {
    private static _instance: MegaverseCreator;

    private constructor() {
        if (!appConfig.CANDIDATE_ID) {
            throw new Error("Candidate ID is required");
        }
    }

    // Sinlgeton pattern
    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private async _deleteAstro(type: AstralType, position: Position) {
        const _endpoint = `${API}${type.toLowerCase()}s`;
        const _body = JSON.stringify({ ...candidateId });

        const response = await fetch(_endpoint, {
            method: "DELETE",
            ...headers,
            body: _body,
        }).catch((err) => {
            throw new Error(err);
        });

        return await response.json();
    }

    async addAstro(astro: AstralObject) {
        const _color = astro.type === "SOLoon" ? { color: astro.color } : {};
        const _direction = astro.type === "comETH" ? { direction: astro.direction } : {};

        const _endpoint = `${API}${astro.type.toLocaleLowerCase()}s`;
        const _body = JSON.stringify({
            ...candidateId,
            ..._color,
            ..._direction,
            ...astro.position,
        });

        console.log(_endpoint, _body);

        const response = await fetch(_endpoint, {
            method: "POST",
            ...headers,
            body: _body,
        }).catch((err) => {
            throw new Error(err);
        });
        if (response.status !== 200) {
            logger.error({ message: `Failed to add ${astro.type}, ${response.status}, ${response.statusText}` });
            return {};
        } else {
            return response.json();
        }
    }

    async deletePolyanet(position: Position) {
        return await this._deleteAstro("POLYanet", position);
    }

    async deleteSoloon(position: Position) {
        return await this._deleteAstro("SOLoon", position);
    }

    async deleteCometh(position: Position) {
        return await this._deleteAstro("comETH", position);
    }

    async getGoal() {
        const response = await fetch(`${API}map/${appConfig.CANDIDATE_ID}/goal`, {
            method: "GET",
            ...headers,
        });

        return await response.json();
    }
}
