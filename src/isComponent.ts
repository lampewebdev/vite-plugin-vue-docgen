import { Config } from "../types/Config.type";

export default (filePath: string, config: Config): boolean => {
    if (
        filePath.includes(process.env.PWD + config.componentDir) &&
        filePath.includes(".vue") &&
        !filePath.includes(".vue?")
    ) {
        return true;
    }
    return false;
};