import crossPositions from "../../services/crossPositions";

describe("crossPositions", () => {
    it("should return the correct cross positions", () => {
        const result = crossPositions(2);
        expect(result).toEqual([]);
    });

    it("should not return positions when dimension is less 0 or less", () => {
        const result = crossPositions(0);
        const result2 = crossPositions(0);
        expect(result).toEqual([]);
        expect(result2).toEqual([]);
    });

    it("should not return positions when emptyBorder is less than 0", () => {
        const result = crossPositions(5, -1);
        expect(result).toEqual([]);
    });

    it("should not return positions when emptyBorder is an odd number", () => {
        const result = crossPositions(5, 3);
        expect(result).toEqual([]);
    });

    it("should return the central position when dimension is 1", () => {
        const result = crossPositions(1);
        expect(result).toEqual([{ row: 0, col: 0 }]);
    });

    it("should return the position when dimension is 7 and border 2", () => {
        const result = crossPositions(7, 2);
        expect(result).toEqual([
            { row: 2, col: 2 },
            { row: 2, col: 4 },
            { row: 4, col: 2 },
            { row: 4, col: 4 },
            { row: 3, col: 3 },
        ]);
    });

    it("should return the position when dimension is 7 and border 2", () => {
        const result = crossPositions(7, 2);
        expect(result).toEqual([
            { row: 2, col: 2 },
            { row: 2, col: 4 },
            { row: 4, col: 2 },
            { row: 4, col: 4 },
            { row: 3, col: 3 },
        ]);
    });

    it("should return the position when dimension is 3", () => {
        const result = crossPositions(3);
        expect(result).toEqual([
            { row: 0, col: 0 },
            { row: 0, col: 2 },
            { row: 2, col: 0 },
            { row: 2, col: 2 },
            { row: 1, col: 1 },
        ]);
    });
});
