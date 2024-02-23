import { MegaverseCreator } from "../../api/megaverseCreator";
import { Polyannet } from "../../astros";

describe("CrossmintChallengeAPI", () => {
    let api: MegaverseCreator;
    let polyannet: Polyannet;
    // let soloon: Soloon;
    // let commeth: Commeth;

    beforeEach(() => {
        api = MegaverseCreator.Instance;
        polyannet = new Polyannet({ row: 0, col: 0 });
        // soloon = new Soloon({ row: 0, col: 0 }, "blue");
        // commeth = new Commeth({ row: 0, col: 0 }, "up");
    });

    it("should add a Polyannet", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(polyannet),
        }) as jest.MockedFunction<typeof global.fetch>;

        const response = await api.addAstro(polyannet);
        expect(response).toEqual(polyannet);
    });

    // it("should add a Soloon", async () => {
    //     const position = { row: 0, col: 0 };
    //     const response = await api.addAstro(soloon);
    //     expect(response).toEqual({ success: true });
    // });

    // it("should add a Commeth", async () => {
    //     const position = { row: 0, col: 0 };
    //     const response = await api.addAstro(commeth);
    //     expect(response).toEqual({ success: true });
    // });

    // it("should delete a Polyannet", async () => {
    //     const position = { row: 0, col: 0 };
    //     const response = await api.deletePolyannet(polyannet.position);
    //     expect(response).toEqual({ success: true });
    // });

    // it("should delete a Soloon", async () => {
    //     const position = { row: 0, col: 0 };
    //     const response = await api.deleteSoloon(soloon.position);
    //     expect(response).toEqual({ success: true });
    // });

    // it("should delete a Commeth", async () => {
    //     const position = { row: 0, col: 0 };
    //     const response = await api.deleteCommeth(commeth.position);
    //     expect(response).toEqual({ success: true });
    // });

    // it("should throw an error when adding a Polyannet with an invalid position", async () => {
    //     const position = { row: -1, col: 0 };
    //     await expect(api.addAstro(polyannet)).rejects.toThrow("Invalid position");
    // });
});
