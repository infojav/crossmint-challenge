import { Astro } from "./Astro";
import { AstralType } from "./types";

export class Polyanet extends Astro {
    get type(): AstralType {
        return "POLYanet";
    }
}
