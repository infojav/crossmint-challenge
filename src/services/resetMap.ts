import { AstroObject } from "../astros";
import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";

export default (metaverse: Metaverse2d) =>
    metaverse.getCurrentMap().then((response: { map: { content: Array<Array<AstroObject>> } }) => {
        response?.map?.content.forEach((astrosColumn: Array<AstroObject>, row: number) => {
            astrosColumn.forEach((astro: AstroObject, column: number) => {
                if (astro === null) return;
                try {
                    switch (astro.type) {
                        case 0:
                            metaverse
                                .deletePolyanet({ row, column })
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({ message: `Polyanet deleted on position at: ${row}, ${column}` })
                                        : logger.info({
                                              message: `Error deleting Polyanet on position at: ${row}, ${column}`,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error  deleting Polyanet on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        case 1:
                            metaverse
                                .deleteSoloon({ row, column })
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({ message: `Deleting Soloon on position at: ${row}, ${column}` })
                                        : logger.info({
                                              message: `Error  deleting Soloon on position at: ${row}, ${column}, error code: ${response.status}, error message: ${response.text} `,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error deleting Soloon on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        case 2:
                            metaverse
                                .deleteCometh({ row, column })
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({
                                              message: `Deleting Cometh added on position at: ${row}, ${column}`,
                                          })
                                        : logger.info({
                                              message: `Error deleting Cometh on position at: ${row}, ${column}`,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error deleting Cometh on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        default:
                            break;
                    }
                } catch (e) {
                    logger.error({ message: `Error Reseting on position at: ${row}, ${column}, ${e}` });
                }
            });
        });
    });
