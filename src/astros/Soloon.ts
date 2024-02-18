import { AstralType } from "../types";
import { Astro } from "./Astro";

export class Soloon extends Astro {
    get type(): AstralType {
        return "SOLoon";
    }
}
