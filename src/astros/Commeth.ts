import { AstralType } from "../types";
import { Astro } from "./Astro";

export class Commeth extends Astro {
    get type(): AstralType {
        return "commETH";
    }
}
