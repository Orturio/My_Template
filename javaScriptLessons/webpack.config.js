const path = require("path");

const config = {
    entry: path.resolve(_dirname, "src", "index.js"),
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.resolve(_dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
    devServer: {
        port: 8080,
        contentBase: path.join(_dirname, "dist"),
    },
};

module.exports = config;