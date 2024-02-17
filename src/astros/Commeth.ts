import { AstralType } from "../types";
import { AstralObject } from "./AstralObject";

export class Commeth extends AstralObject {
    get type(): AstralType {
        return "commETH";
    }
}
