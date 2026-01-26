import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { type UserConfig } from "vite";

export default {
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "!": path.resolve(__dirname, "."),
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
        svgr(
            {
                include: "**/*.svg?react",
            }
        ),
        visualizer(),
    ],
} satisfies UserConfig;
