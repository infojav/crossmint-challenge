import { CrossmintChallengeAPI } from "./api/crossmint-challenge";
import crossPositions from "./services/crossPositions";

// const api = CrossmintChallengeAPI.Instance;
// api.getGoal().then((response) => {
//     console.log(response);
// });

const r = crossPositions(11, 2);

console.log(r);
