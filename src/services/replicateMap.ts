import { AstroDescription, Color, Direction } from "../astros";
import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";

export default (metaverse: Metaverse2d) =>
    metaverse.getGoal().then((response: { goal: Array<Array<AstroDescription>> }) => {
        response.goal.forEach((astrosColumn: Array<AstroDescription>, row: number) => {
            astrosColumn.forEach((astro: AstroDescription, column: number) => {
                try {
                    switch (astro) {
                        case "POLYANET":
                            metaverse
                                .addPolyannet({ row, column })
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({ message: `${astro} added on position at: ${row}, ${column}` })
                                        : logger.info({
                                              message: `Error adding ${astro} on position at: ${row}, ${column}`,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error adding ${astro} on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        case "WHITE_SOLOON":
                        case "RED_SOLOON":
                        case "BLUE_SOLOON":
                        case "PURPLE_SOLOON":
                            const color = astro.toString().split("_")[0].toLowerCase();
                            metaverse
                                .addSoloon({ row, column }, color as Color)
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({ message: `${astro} added on position at: ${row}, ${column}` })
                                        : logger.info({
                                              message: `Error adding ${astro} on position at: ${row}, ${column}, error code: ${response.status}, error message: ${response.text} `,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error adding ${astro} on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        case "UP_COMETH":
                        case "DOWN_COMETH":
                        case "LEFT_COMETH":
                        case "RIGHT_COMETH":
                            const direction = astro.toString().split("_")[0].toLowerCase();
                            metaverse
                                .addCometh({ row, column }, direction as Direction)
                                .then((response) => {
                                    response.status === 200
                                        ? logger.info({ message: `${astro} added on position at: ${row}, ${column}` })
                                        : logger.info({
                                              message: `Error adding ${astro} on position at: ${row}, ${column}`,
                                          });
                                })
                                .catch((e) => {
                                    logger.error({
                                        message: `Error adding ${astro} on position at: ${row}, ${column}, ${e}`,
                                    });
                                });
                            break;
                        default:
                            break;
                    }
                } catch (e) {
                    logger.error({ message: `Error adding ${astro} on position at: ${row}, ${column}, ${e}` });
                }
            });
        });
    });
