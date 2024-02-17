import http from "http";

import { SERVER_PORT } from "./config/constants";

const port = process.env.SERVER_PORT || SERVER_PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

export { server };
