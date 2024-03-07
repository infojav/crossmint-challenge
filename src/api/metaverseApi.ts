import { resolve } from "path";

import { AstralObject, AstralType, Position } from "../astros";
import { appConfig } from "../config";
import { logger, sleep } from "../utils";
import { consoleFactory } from "../utils/logger/console";

const API = appConfig.CROSSMINT_CHALLENGE_API;
const CANDIDATE_ID = appConfig.CANDIDATE_ID;

const headers = {
    headers: {
        "Content-Type": "application/json",
    },
};

export class MetaverseApi {
    private static _instance: MetaverseApi;
    private static _lastRequest = 0;

    private constructor() {
        if (!CANDIDATE_ID) {
            throw new Error("Candidate ID is required");
        }
    }

    // Sinlgeton pattern
    static getInstance() {
        return this._instance || (this._instance = new this());
    }

    static get lastRequest() {
        return MetaverseApi._lastRequest;
    }

    static get timeout() {
        if (!this.lastRequest) {
            this._lastRequest = Date.now();
            return 0;
        } else {
            const _now = Date.now();
            const _diff = _now - this._lastRequest;
            const _timeout = _diff < appConfig.REQ_X_SECOND * 1000 ? appConfig.REQ_X_SECOND * 1000 - _diff : 0;
            MetaverseApi._lastRequest = _now + _timeout;
            return _timeout;
        }
    }

    private async _deleteAstro(type: AstralType, position: Position): Promise<Response> {
        const _endpoint = `${API}${type.toLowerCase()}s`;
        const _body = JSON.stringify({ candidateId: CANDIDATE_ID, ...position });

        return new Promise((resolve) =>
            setTimeout(
                () =>
                    fetch(_endpoint, {
                        method: "DELETE",
                        ...headers,
                        body: _body,
                    }).then(async (response) => {
                        resolve(response);
                    }),
                MetaverseApi.timeout
            )
        );
    }

    async addAstro(astro: AstralObject): Promise<Response> {
        const _color = astro.type === "SOLoon" ? { color: astro.color } : {};
        const _direction = astro.type === "comETH" ? { direction: astro.direction } : {};

        const _endpoint = `${API}${astro.type.toLowerCase()}s`;
        const _body = JSON.stringify({
            candidateId: CANDIDATE_ID,
            ..._color,
            ..._direction,
            ...astro.position,
        });

        return new Promise((resolve) =>
            setTimeout(
                () =>
                    fetch(_endpoint, {
                        method: "POST",
                        ...headers,
                        body: _body,
                    }).then(async (response) => {
                        resolve(response);
                    }),
                MetaverseApi.timeout
            )
        );
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
        const response = await fetch(`${API}map/${CANDIDATE_ID}/goal`, {
            method: "GET",
            ...headers,
        });

        return await response.json();
    }

    async getCurrentMap() {
        const response = await fetch(`${API}map/${CANDIDATE_ID}`, {
            method: "GET",
            ...headers,
        });

        return await response.json();
    }
}
