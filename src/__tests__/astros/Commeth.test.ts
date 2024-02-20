import { Commeth } from "../../astros/Commeth";
import { appConfig } from "../../config";

describe("Commeth", () => {
    let commeth: Commeth;

    beforeEach(() => {
        commeth = new Commeth({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START }, "right");
    });

    test("type should be a commETH", () => {
        expect(commeth.type).toBe("commETH");
        expect(commeth.direction).toBe("right");
    });
});

describe("Commeth positions", () => {
    test("position should be { row: 1, col: 1 }", () => {
        let commeth = new Commeth({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START }, "right");
        expect(commeth.position).toEqual({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START });
    });

    test("should throw an error if row position is invalid", () => {
        expect(
            () => new Commeth({ row: appConfig.UNIVERSE_START - 1, col: appConfig.UNIVERSE_START }, "right")
        ).toThrowError("Invalid position");
    });

    test("should throw an error if col position is invalid", () => {
        expect(
            () => new Commeth({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START - 1 }, "right")
        ).toThrowError("Invalid position");
    });
});
