import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { type UserConfig, type ConfigEnv } from "vite";

export default ({ mode }: ConfigEnv): UserConfig => (
    {
        base: "/",
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "!": path.resolve(__dirname, "."),
            },
        },
        plugins: [
            react(),
            svgr(
                {
                    include: "**/*.svg?react",
                }
            ),
            ...(mode === "analyze" ? [visualizer()] : []),
        ],
        optimizeDeps: {
            include: [
                "react",
                "react-dom",
                "@mui/joy",
            ],
        },
        server: {
            watch: {
                ignored: [
                    "**/dist/**",
                    "**/.git/**",
                    "**/node_modules/**",
                    "**/.pnpm-store/**",
                ],
            },
        },
    } satisfies UserConfig
);
