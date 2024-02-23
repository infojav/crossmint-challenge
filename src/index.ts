import { Metaverse2d } from "./metaverse";
import createPolyannets from "./services/createPolyannets";
import { logger } from "./utils";

// import { consoleFactory, loggerFactory } from "./utils";

// const api = CrossmintChallengeAPI.Instance;
// api.getGoal().then((response) => {
//     console.log(response);
// });

// const r = crossPositions(11, 2);
createPolyannets(new Metaverse2d(), 11, 2);
// logger.debug(r);
