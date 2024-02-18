import { Commeth, Polyannet, Soloon } from "../../astros";
import { Metaverse2d } from "../../metaverse";

describe("Metaverse2d", () => {
    let metaverse2d: Metaverse2d;

    beforeEach(() => {
        metaverse2d = new Metaverse2d(100, 100);
    });

    test("Should add an astro", () => {
        let commETH2 = new Commeth();
        metaverse2d.addAstro(commETH2, { row: 1, col: 1 });
        expect(metaverse2d.hasAstro({ row: 1, col: 1 })).toBeTruthy();
        expect(metaverse2d.hasAstro({ row: 1, col: 1 }).type).toBe("commETH");
    });

    test("Should not have an Astro", () => {
        expect(!!metaverse2d.hasAstro({ row: 1, col: 1 })).toBe(false);
    });

    test("should have width of 100", () => {
        expect(metaverse2d.width).toBe(100);
    });

    test("should have height of 100", () => {
        expect(metaverse2d.height).toBe(100);
    });
});
