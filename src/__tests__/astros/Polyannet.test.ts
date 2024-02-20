import { Polyannet } from "../../astros/Polyannet";
import { appConfig } from "../../config";

describe("Polyannet", () => {
    let polyannet: Polyannet;

    beforeEach(() => {
        polyannet = new Polyannet({ row: appConfig.UNIVERSE_START, col: appConfig.UNIVERSE_START });
    });

    test("type should be a Polyannet", () => {
        expect(polyannet.type).toBe("POLYannet");
    });
});
