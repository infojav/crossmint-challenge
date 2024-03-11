import MetaverseApi from "../../api";
import { Astro, Cometh, Polyanet, Soloon } from "../../astros";

jest.setTimeout(0);

describe("MetaverseApi", () => {
    let api: MetaverseApi;
    let polyanet: Polyanet;
    let soloon: Soloon;
    let cometh: Cometh;

    beforeEach(() => {
        api = MetaverseApi.getInstance();
        polyanet = new Polyanet({ row: 0, column: 0 });
        soloon = new Soloon({ row: 0, column: 0 }, "blue");
        cometh = new Cometh({ row: 0, column: 0 }, "up");
    });

    it("should add a Polyanet", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ json: {} }),
            })
        ) as jest.Mock;

        const response = await api.addAstro(polyanet);
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should add a Soloon", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ json: {} }),
            })
        ) as jest.Mock;

        const response = await api.addAstro(soloon);
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should add a Cometh", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ json: {} }),
            })
        ) as jest.Mock;

        const response = await api.addAstro(soloon);
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should delete a Polyannet", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ success: true }),
        }) as jest.MockedFunction<typeof global.fetch>;

        const response = await api.deletePolyanet({ row: 0, column: 0 });
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should delete a Soloon", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ success: true }),
        }) as jest.MockedFunction<typeof global.fetch>;

        const response = await api.deleteSoloon({ row: 0, column: 0 });
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should delete a Commeth", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ success: true }),
        }) as jest.MockedFunction<typeof global.fetch>;

        const response = await api.deleteCometh({ row: 0, column: 0 });
        const json = await response.json();
        expect(json).toBeInstanceOf(Object);
    });

    it("should throw an error when adding a Polyanet with an invalid position", async () => {
        const position = { row: -1, column: 0 };
        try {
            const polyannet = new Polyanet(position);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
