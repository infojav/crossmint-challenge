import { sleep } from "../../utils/sleep";

describe("sleep", () => {
    jest.useFakeTimers();

    it("should resolve after the specified time", async () => {
        const ms = 500;
        const promise = sleep(ms);

        jest.advanceTimersByTime(ms);

        await expect(promise).resolves.toBeUndefined();
    });
});
