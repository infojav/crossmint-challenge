import { Metaverse2d } from "./metaverse";
import compareMetaverse from "./services/compareMetaverse";
import replicateMap from "./services/replicateMap";
import resetMap from "./services/resetMap";

const m = new Metaverse2d();

replicateMap(m);

// compareMetaverse(m);
// resetMap(m);
