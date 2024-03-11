import MetaverseApi from "../../api/metaverseApi";
import { Metaverse2d } from "../../metaverse";

// jest mock singleton class clode

// https://stackoverflow.com/questions/53697398/jest-mock-singleton-class
// https://jestjs.io/docs/en/es6-class-mocks
// https://jestjs.io/docs/en/manual-mock

// Mocks
const mockAddAstro = jest.fn();
const mockDeletePolyanet = jest.fn();
const mockDeleteSoloon = jest.fn();
const mockDeleteCometh = jest.fn();

jest.mock("../../api/metaverseApi");

// Test suite for the Metaverse2d class
describe("Metaverse2d", () => {
    beforeEach(() => {
        // Clear the mock
        MetaverseApi.getInstance = jest.fn().mockReturnValue({
            addAstro: mockAddAstro,
            deletePolyanet: mockDeletePolyanet,
            deleteSoloon: mockDeleteSoloon,
            deleteCometh: mockDeleteCometh,
        });
        jest.clearAllMocks();
    });

    test("constructor", () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Check if the instance is created
        expect(metaverse).toBeInstanceOf(Metaverse2d);
    });

    test("addPolyannet", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Add a Polyanet to the metaverse
        const response = await metaverse.addPolyannet({ row: 0, column: 0 });
        // Check if the Polyanet is added
        expect(mockAddAstro).toHaveBeenCalled();
    });

    test("addSoloon", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Add a Soloon to the metaverse
        const response = await metaverse.addSoloon({ row: 0, column: 0 }, "blue");
        // Check if the Soloon is added
        expect(mockAddAstro).toHaveBeenCalled();
    });

    test("addCometh", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Add a Cometh to the metaverse
        const response = await metaverse.addCometh({ row: 0, column: 0 }, "up");
        // Check if the Cometh is added
        expect(mockAddAstro).toHaveBeenCalled();
    });

    test("deletePolyanet", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Delete a Polyanet from the metaverse
        const response = await metaverse.deletePolyanet({ row: 0, column: 0 });
        // Check if the Polyanet is deleted
        expect(mockDeletePolyanet).toHaveBeenCalled();
    });

    test("deleteSoloon", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Delete a Soloon from the metaverse
        const response = await metaverse.deleteSoloon({ row: 0, column: 0 });
        // Check if the Soloon is deleted
        expect(mockDeleteSoloon).toHaveBeenCalled();
    });

    test("deleteCometh", async () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Delete a Cometh from the metaverse
        const response = await metaverse.deleteCometh({ row: 0, column: 0 });
        // Check if the Cometh is deleted
        expect(mockDeleteCometh).toHaveBeenCalled();
    });
});
