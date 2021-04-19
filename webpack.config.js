const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    CopyPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");


module.exports = {
    mode: "production",
    entry: {
        js: "./src/index.js",
        react: "./src/index_react.js",
        ts: "./src/index_ts.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[chunkhash].js",
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attributes: false,
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/,
                use: ["style-loader", "css-loader"],
                // use: [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             publicPath: "./",
                //         },
                //     },
                //     "css-loader",
                // ],
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    "file-loader?name=assets/[name].[ext]",
                    "image-webpack-loader",
                ],
                // use: [
                //     {
                //         loader: "file-loader",
                //         options: {
                //             esModule: false,
                //             name: "assets/[name].[ext]",
                //         },
                //     },
                // ],
            },
            {
                test: /\.(woff)$/i,
                use: ["file-loader?name=assets/[name].[ext]"],
            },
        ],
    },
    plugins: [
        /* new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }), */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["js"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./react.html",
            chunks: ["react"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./ts.html",
            chunks: ["ts"],
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [{ from: "src/assets", to: "assets" }],
        }),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
    ],
};
