import { TIMEOUT } from "dns";

import { Polyanet } from "../astros";
import { appConfig } from "../config";
import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";
import crossPositions from "./crossPositions";

export default (m: Metaverse2d, dimension: number, emptyBorder = 0) => {
    const _timeout = Math.ceil(1000 / Number(appConfig.REQ_X_SECOND));
    let _requestNumber = 0;

    console.log(_timeout);
    crossPositions(11, 2).forEach((position) => {
        try {
            setTimeout(async () => {
                const reponse = await m.addPolyannet(position);
                if (reponse.status === 200) {
                    logger.info({ message: `Polyannet added on position ${JSON.stringify(position)}` });
                }
            }, _timeout * _requestNumber++);
        } catch (e) {
            logger.error({ message: `Error adding POLYannet on position ${JSON.stringify(position)}, ${e}` });
        }
    });

    return m;
};
