var webpack = require("webpack");
var path = require('path');


module.exports = {
    entry: "./src/App.js",
    output: {
        // path: '/Users/admin/Git/react-flux-architecture-es6/dist/',
        filename: "build/bundle.js",
            sourceMapFilename: "build/bundle.map"
        // publicPath: '/'
    },
     devtool:"#source-map",
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,     // ถ้าเจอไฟล์ .css
                loader: 'style-loader!css-loader' // ให้ load ไฟล์นั้นด้วย style-loader และ css-loader
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    }

};
