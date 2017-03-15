var path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: "./src/js/main.js",
    output: {
        path: './dist',
        filename: "bundle.js",
    },
    devServer: {
        inline: true,
        contentBase: path.resolve('./dist'),
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
    }
};