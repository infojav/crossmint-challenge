import { MegaverseCreator } from "./api";
import { Metaverse2d } from "./metaverse";
import createPolyannets from "./services/createPolyanets";
import crossPositions from "./services/crossPositions";
import { logger } from "./utils";

// const api = MegaverseCreator.Instance;
// api.getGoal().then((response: any) => {
//     console.log(response);
// });

const r = crossPositions(11, 2);
createPolyannets(new Metaverse2d(), 11, 2);

console.log(r);
logger.debug(r);
