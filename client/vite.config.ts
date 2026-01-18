import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { type UserConfig } from "vite";

export default {
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [
        react(
            {
                babel: {
                    presets: [
                        [
                            "@babel/preset-typescript",
                            {
                                onlyRemoveTypeImports: true,
                            },
                        ],
                        [
                            "@babel/preset-react",
                            {
                                runtime: "automatic",
                            },
                        ],
                    ],
                },
            }
        ),
        svgr(),
        tailwindcss(),
        visualizer(),
    ],
} satisfies UserConfig;
