import { AstroDescription } from "../astros/types";
import { Metaverse2d } from "../metaverse";
import { logger } from "../utils";

export default (metaverse: Metaverse2d) => {
    Promise.all([metaverse.getGoal(), metaverse.getCurrentMap()]).then(([goalMap, currentMap]) => {
        goalMap?.goal.forEach((astrosColumn: Array<AstroDescription | "SPACE">, row: number) => {
            astrosColumn.forEach((astro: AstroDescription | "SPACE", column: number) => {
                if (currentMap?.map?.content[row][column] === null)
                    try {
                        switch (astro) {
                            case "SPACE":
                                if (currentMap?.map?.content[row][column] === null) return;
                                logger.error({
                                    message: `Error is Not an SPACE on position at: ${row}, ${column}`,
                                });
                                break;

                            case "POLYANET":
                                if (currentMap?.map?.content[row][column].type === 0) return;
                                logger.error({
                                    message: `Error is Not a POLYANET on position at: ${row}, ${column}`,
                                });
                                break;
                            case "WHITE_SOLOON":
                            case "RED_SOLOON":
                            case "BLUE_SOLOON":
                            case "PURPLE_SOLOON":
                                if (currentMap?.map?.content[row][column].type === 1) return;
                                logger.error({
                                    message: `Error is Not a SOLOON on position at: ${row}, ${column}`,
                                });
                                break;
                            case "UP_COMETH":
                            case "DOWN_COMETH":
                            case "LEFT_COMETH":
                            case "RIGHT_COMETH":
                                if (currentMap?.map?.content[row][column].type === 2) return;
                                logger.error({
                                    message: `Error is Not a COMETH on position at: ${row}, ${column}`,
                                });
                            default:
                                break;
                        }
                    } catch (e) {
                        logger.error({ message: `Error adding ${astro} on position at: ${row}, ${column}, ${e}` });
                    }
            });
        });
    });
};
