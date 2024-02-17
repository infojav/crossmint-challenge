import { Soloon } from "../../astros/Soloon";
import { UNIVERSE_START } from "../../config/constants";

describe("Soloon", () => {
    let soloon: Soloon;

    beforeEach(() => {
        soloon = new Soloon({ row: UNIVERSE_START, col: UNIVERSE_START });
    });

    test("type should be a Soloon", () => {
        expect(soloon.type).toBe("SOLoon");
    });
});
