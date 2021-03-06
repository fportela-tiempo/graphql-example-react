var path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: "./src/js/main.js",
    output: {
        path: path.resolve('./dist'),
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer:{
        port: 8080
    }
};