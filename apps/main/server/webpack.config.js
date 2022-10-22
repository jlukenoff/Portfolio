"use strict";

const path = require("path");

const ENTRY_POINT = path.resolve(__dirname, "src/index.ts");
const OUT_DIR = path.resolve(__dirname, "dist");
const TS_CONFIG = path.resolve(__dirname, "tsconfig.json");

const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

const webpackConfig = {
    mode,
    target: "node",
    entry: { index: ENTRY_POINT },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: TS_CONFIG,
                            onlyCompileBundledFiles: true,
                        },
                    },
                ],
                exclude: /node_modules|__tests__|__mocks__/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        alias: {
            "@shared": path.resolve(__dirname, "../shared"),
            "~": path.resolve(__dirname, "src"),
        },
    },
    output: {
        path: OUT_DIR,
        filename: "[name].js",
    },
    externals: {
        express: 'require("express")',
        "pgsql-parser": 'require("pgsql-parser")',
    },
    devtool: "inline-source-map",
};

module.exports = webpackConfig;