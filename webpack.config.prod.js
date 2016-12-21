var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    debug: true,
    entry: {
        main: path.resolve(__dirname, "src/index.tsx"),
        vendor: path.resolve(__dirname, "src/vendor.tsx")
    },
    output: {
        filename: "[name].js",
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
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
      new ExtractTextPlugin("[name].css"),
      new webpack.optimize.CommonsChunkPlugin({
          name: "vendor"
      }),
      new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.ProvidePlugin({
        Promise: "bluebird"
      }),

      new webpack.NormalModuleReplacementPlugin(/es6-promise$/, "bluebird"),
    ]
};
