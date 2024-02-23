const semver = require("semver");
const engines = require("../package").engines;

// Check node version
const node_version = engines.node;
if (!semver.satisfies(process.version, node_version)) {
    console.log(`Required node version ${node_version} not satisfied with current version ${process.version}.`);
    process.exit(1);
}
