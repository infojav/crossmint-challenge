import http from "http";

import { SERVER_PORT } from "../config/constants";
import { server } from "../index";

const port = process.env.SERVER_PORT || SERVER_PORT;

describe("server", () => {
    it("should return a 200 status code", (done) => {
        http.get(`http://localhost:${port}`, (res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});
