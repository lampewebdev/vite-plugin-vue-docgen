import { normalizePath } from "vite";
import { parse } from "vue-docgen-api";
import { basename } from "path";
import { writeFileSync } from "fs";
import { Config } from "../types/Config.type";

export default async (
    filePath: string,
    config: Config
): Promise<void> => {
    const compName = basename(filePath, ".vue");
    const fileLocation =
        process.env.PWD +
        config.docComponentDir +
        compName +
        "/" +
        compName +
        ".json";
    const parsedData = await parse(normalizePath(filePath));
    writeFileSync(fileLocation, JSON.stringify(parsedData));
};