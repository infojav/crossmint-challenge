import { Polyannet } from "../../astros/Polyannet";
import { UNIVERSE_START } from "../../config/constants";

describe("Polyannet", () => {
    let polyannet: Polyannet;

    beforeEach(() => {
        polyannet = new Polyannet({ row: UNIVERSE_START, col: UNIVERSE_START });
    });

    test("type should be a Polyannet", () => {
        expect(polyannet.type).toBe("POLYannet");
    });
});
