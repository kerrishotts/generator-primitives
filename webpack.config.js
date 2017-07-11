/* globals require, __dirname, module */
var path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname),
    devtool: "inline-source-map",
    entry: {
        "generator-primitives": ["./index.ts"],
        "generator-primitives.min": ["./index.ts"],
    },
    externals: ["corejs"],
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx", "*"],
        modules: ["node_modules"],
    },
    module: {
        rules: [
            {
                exclude: [/node_modules/, /tslib\.es6\.js/],
                loader: "ts-loader",
                options: {
                    entryFileIsJs: true,
                },
                test: /\.([t|j]sx?)$/,
            },
        ],
    },
    output: {
        filename: "[name].js",
        library: "generator-primitives",
        libraryTarget: "umd",
        umdNamedDefine: true,
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourcemap: true,
            include: /\.min\.js$/,
        }),
    ],
};
