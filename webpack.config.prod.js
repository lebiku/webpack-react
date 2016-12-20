var path = require("path");
var webpack = require("webpack");

module.exports = {
    debug: true,
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.min.js",
        path: path.resolve("dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    target: "web",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },

    module: {
        loaders: [
            // load css and process sass
            { test: /\.css$/, loader: "style-loader!css-loader" },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
      // new webpack.optimize.CommonsChunkPlugin("common.js"),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.ProvidePlugin({
        Promise: "bluebird"
      }),

      new webpack.NormalModuleReplacementPlugin(/es6-promise$/, "bluebird"),
    ]
};
