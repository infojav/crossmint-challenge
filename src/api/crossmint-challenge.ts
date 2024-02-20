import { AstralObject } from "../astros";
import { appConfig } from "../config";
import { AstralType, Position } from "../types";

const API = appConfig.CROSSMINT_CHALLENGE_API;
const candidateId = { candidateId: appConfig.CANDIDATE_ID };

const headers = {
    headers: {
        "Content-Type": "application/json",
    },
};

export class CrossmintChallengeAPI {
    private static _instance: CrossmintChallengeAPI;

    private constructor() {
        if (!appConfig.CANDIDATE_ID) {
            throw new Error("Candidate ID is required");
        }
    }

    // Ssinlgeton pattern
    static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private async deleteAstro(type: AstralType, position: Position) {
        const response = await fetch(`${API}${type}?=row=${position.row}&col=${position.col}`, {
            method: "DELETE",
            ...headers,
            body: JSON.stringify({ ...candidateId }),
        }).catch((err) => {
            throw new Error(err);
        });

        return await response.json();
    }

    async addAstro(astro: AstralObject) {
        const _color = astro.type === "SOLoon" ? { color: astro.color } : {};
        const _direction = astro.type === "commETH" ? { direction: astro.direction } : {};

        const response = await fetch(`${API}${astro.type}?=row=${astro.position.row}&col=${astro.position.col}`, {
            method: "POST",
            ...headers,
            body: JSON.stringify({
                ...candidateId,
                ..._color,
                ..._direction,
            }),
        }).catch((err) => {
            throw new Error(err);
        });

        return await response.json();
    }

    async deletePolyannet(position: Position) {
        return await this.deleteAstro("POLYannet", position);
    }

    async deleteSoloon(position: Position) {
        return await this.deleteAstro("SOLoon", position);
    }

    async deleteCommeth(position: Position) {
        return await this.deleteAstro("commETH", position);
    }

    async getGoal() {
        const response = await fetch(`${API}map/${appConfig.CANDIDATE_ID}/goal`, {
            method: "GET",
            ...headers,
        });

        return await response.json();
    }
}
