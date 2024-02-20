import { Soloon } from "../../astros/Soloon";
import { appConfig } from "../../config";

describe("Soloon", () => {
    let soloon: Soloon;

    beforeEach(() => {
        soloon = new Soloon({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START }, "blue");
    });

    test("type should be a Soloon", () => {
        expect(soloon.type).toBe("SOLoon");
        expect(soloon.color).toBe("blue");
        expect(soloon.position).toEqual({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START });
    });
});
