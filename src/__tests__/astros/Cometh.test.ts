import { Cometh } from "../../astros";
import { appConfig } from "../../config";

describe("Commeth", () => {
    let commeth: Cometh;

    beforeEach(() => {
        commeth = new Cometh({ row: appConfig.UNIVERSE_START, column: appConfig.UNIVERSE_START }, "right");
    });

    test("type should be a commETH", () => {
        expect(commeth.type).toBe("comETH");
        expect(commeth.direction).toBe("right");
    });
});

describe("Commeth positions", () => {
    test("position should be { row: 1, column: 1 }", () => {
        const commeth = new Cometh({ row: appConfig.UNIVERSE_START, column: appConfig.UNIVERSE_START }, "right");
        expect(commeth.position).toEqual({ row: appConfig.UNIVERSE_START, column: appConfig.UNIVERSE_START });
    });

    test("should throw an error if row position is invalid", () => {
        expect(
            () => new Cometh({ row: appConfig.UNIVERSE_START - 1, column: appConfig.UNIVERSE_START }, "right")
        ).toThrowError("Invalid position");
    });

    test("should throw an error if column position is invalid", () => {
        expect(
            () => new Cometh({ row: appConfig.UNIVERSE_START, column: appConfig.UNIVERSE_START - 1 }, "right")
        ).toThrowError("Invalid position");
    });
});
