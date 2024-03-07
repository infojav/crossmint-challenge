import { Polyanet } from "../../astros";
import { appConfig } from "../../config";

describe("Polyannet", () => {
    let polyannet: Polyanet;

    beforeEach(() => {
        polyannet = new Polyanet({ row: appConfig.UNIVERSE_START, column: appConfig.UNIVERSE_START });
    });

    test("type should be a Polyannet", () => {
        expect(polyannet.type).toBe("POLYanet");
    });
});
