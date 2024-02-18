import { UNIVERSE_START } from "../config/constants";
import { AstralType, Position } from "../types";

export interface AstralObject {
    type: AstralType;
}

export abstract class Astro implements AstralObject {
    abstract get type(): AstralType;
}
