import { Metaverse2d } from "./metaverse";
import replicateMap from "./services/replicateMap";

const m = new Metaverse2d();

// replicate a map looking the candidate's goal map.
// It works in both phases 1 and 2.
replicateMap(m);
