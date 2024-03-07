import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";
import crossPositions from "./crossPositions";

export default (metaverse: Metaverse2d, dimension: number, emptyBorder = 0) => {
    crossPositions(dimension, emptyBorder).forEach(async (position) => {
        metaverse
            .addPolyannet({ ...position })
            .then((response) => {
                response.status === 200
                    ? logger.info({ message: `POLYanet added on position at: ${position}` })
                    : logger.info({
                          message: `Error adding POLYanet on position at: ${position}`,
                      });
            })
            .catch((e) => {
                logger.error({
                    message: `Error adding POLYanet on position at: ${position}, ${e}`,
                });
            });
    });

    return metaverse;
};
