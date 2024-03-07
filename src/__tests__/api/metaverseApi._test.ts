// import { MetaverseApi } from "../../api";
// import { Cometh, Polyanet, Soloon } from "../../astros";

// describe("MetaverseApi", () => {
//     let api: MetaverseApi;
//     let polyanet: Polyanet;
//     let soloon: Soloon;
//     let cometh: Cometh;

//     it("should add an astro", async () => {
//         global.fetch = jest.fn().mockResolvedValue({
//             json: jest.fn().mockResolvedValue({ json: {} }),
//         }) as jest.MockedFunction<typeof global.fetch>;

//         const response = await api.addAstro(polyanet);
//         expect(response).toEqual({ success: true });
//     });

//     // beforeEach(() => {
//     //     api = MetaverseApi.getInstance();
//     //     polyanet = new Polyanet({ row: 0, column: 0 });
//     //     soloon = new Soloon({ row: 0, column: 0 }, "blue");
//     //     cometh = new Cometh({ row: 0, column: 0 }, "up");
//     // });

//     // it("should add a Polyanet", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue(polyanet),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.addAstro(polyanet);
//     //     expect(response.json()).toEqual({});
//     // });

//     // it("should add a Soloon", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue(soloon),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.addAstro(soloon);
//     //     expect(response).toEqual(soloon);
//     // });

//     // it("should add a Cometh", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue(cometh),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.addAstro(cometh);
//     //     expect(response).toEqual(cometh);
//     // });

//     // it("should delete a Polyannet", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue({ success: true }),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.deletePolyanet(polyannet.position);
//     //     expect(response).toEqual({ success: true });
//     // });

//     // it("should delete a Soloon", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue({ success: true }),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.deleteSoloon(soloon.position);
//     //     expect(response).toEqual({ success: true });
//     // });

//     // it("should delete a Commeth", async () => {
//     //     global.fetch = jest.fn().mockResolvedValue({
//     //         json: jest.fn().mockResolvedValue({ success: true }),
//     //     }) as jest.MockedFunction<typeof global.fetch>;

//     //     const response = await api.deleteCometh(cometh.position);
//     //     expect(response).toEqual({ success: true });
//     // });

//     // it("should throw an error when adding a Polyanet with an invalid position", async () => {
//     //     const position = { row: -1, column: 0 };
//     //     const polyannet = new Polyanet(position);
//     //     const expectedError = new Error("Invalid position for Polyanet");
//     // });
// });
