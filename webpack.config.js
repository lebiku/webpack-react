var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
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

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    // webpack dev server configuration
    devServer: {
        contentBase: "./dist",
        noInfo: false,
        inline: true,
        port: 3000
    },
};
