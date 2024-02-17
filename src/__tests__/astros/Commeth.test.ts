import { Commeth } from "../../astros/Commeth";
import { UNIVERSE_START } from "../../config/constants";

describe("Commeth", () => {
    let commeth: Commeth;

    beforeEach(() => {
        commeth = new Commeth({ row: UNIVERSE_START, col: UNIVERSE_START });
    });

    test("type should be a commETH", () => {
        expect(commeth.type).toBe("commETH");
    });
});

describe("Commeth positions", () => {
    test("position should be { row: 1, col: 1 }", () => {
        let commeth = new Commeth({ row: UNIVERSE_START, col: UNIVERSE_START });
        expect(commeth.Position).toEqual({ row: UNIVERSE_START, col: UNIVERSE_START });
    });

    test("should throw an error if row position is invalid", () => {
        expect(() => new Commeth({ row: UNIVERSE_START - 1, col: UNIVERSE_START })).toThrowError("Invalid position");
    });

    test("should throw an error if col position is invalid", () => {
        expect(() => new Commeth({ row: UNIVERSE_START, col: UNIVERSE_START - 1 })).toThrowError("Invalid position");
    });
});
