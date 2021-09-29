import { Plugin } from "vite";
import isComponent from "./src/isComponent";
import generateDocJson from "./src/generateDocJson";
import { Config } from "./types/Config.type";

export default function VueDocGen(config: Config): Plugin {
    return {
        name: "vite-plugin-vue-docgen-json",
        config() {
            return {
                server: {
                    force: true,
                },
            };
        },
        async load(id) {
            if (isComponent(id, config)) {
                generateDocJson(id, config);
            }
            return null;
        },
        async handleHotUpdate(ctx) {
            if (isComponent(ctx.file, config)) {
                generateDocJson(ctx.file, config);
            }
        },
    };
}
