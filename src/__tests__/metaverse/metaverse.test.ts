import { Metaverse2d } from "../../metaverse";

// jest mock singleton class clode

// https://stackoverflow.com/questions/53697398/jest-mock-singleton-class
// https://jestjs.io/docs/en/es6-class-mocks
// https://jestjs.io/docs/en/manual-mock

// Mock the external classes and functions
// jest.mock("../api/metaverseApi", () => ({
//     addPolyannet: jest.fn().mockResolvedValue({ success: true }),
//     deletePolyannet: jest.fn().mockResolvedValue({ success: true }),
//     addCometh: jest.fn().mockResolvedValue({ success: true }),
//     deleteCometh: jest.fn().mockResolvedValue({ success: true }),
// }));

// Test suite for the Metaverse2d class
describe("Metaverse2d", () => {
    beforeEach(() => {
        // Clear the mock
        jest.clearAllMocks();
    });

    test("constructor", () => {
        // Create a new instance of Metaverse2d
        const metaverse = new Metaverse2d();
        // Check if the instance is created
        expect(metaverse).toBeInstanceOf(Metaverse2d);
    });

    // test("addPolyannet", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Add a Polyanet to the metaverse
    //     const response = await metaverse.addPolyannet({ row: 0, column: 0 });
    //     // Check if the Polyanet is added
    //     expect(response).toEqual({ success: true });
    // });

    // test("addSoloon", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Add a Soloon to the metaverse
    //     const response = await metaverse.addSoloon({ row: 0, column: 0 }, "blue");
    //     // Check if the Soloon is added
    //     expect(response).toEqual({ success: true });
    // });

    // test("addCometh", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Add a Cometh to the metaverse
    //     const response = await metaverse.addCometh({ row: 0, column: 0 }, "up");
    //     // Check if the Cometh is added
    //     expect(response).toEqual({ success: true });
    // });

    // test("deletePolyanet", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Delete a Polyanet from the metaverse
    //     const response = await metaverse.deletePolyanet({ row: 0, column: 0 });
    //     // Check if the Polyanet is deleted
    //     expect(response).toEqual({ success: true });
    // });

    // test("deleteSoloon", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Delete a Soloon from the metaverse
    //     const response = await metaverse.deleteSoloon({ row: 0, column: 0 });
    //     // Check if the Soloon is deleted
    //     expect(response).toEqual({ success: true });
    // });

    // test("deleteCometh", async () => {
    //     // Create a new instance of Metaverse2d
    //     const metaverse = new Metaverse2d();
    //     // Delete a Cometh from the metaverse
    //     const response = await metaverse.deleteCometh({ row: 0, column: 0 });
    //     // Check if the Cometh is deleted
    //     expect(response).toEqual({ success: true });
    // });
});
