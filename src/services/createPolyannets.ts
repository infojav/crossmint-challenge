import { Polyannet } from "../astros";
import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";
import crossPositions from "./crossPositions";

export default (m: Metaverse2d, dimension: number, emptyBorder = 0) => {
    crossPositions(11, 2).forEach(async (position) => {
        try {
            // await m.addPolyannet(position);
            logger.info(position);

            // logger.info(`POLYannet added successfully on position ${JSON.stringify(position)}`);
        } catch (e) {
            // logger.error(e);
        }
    });

    return m;
};
