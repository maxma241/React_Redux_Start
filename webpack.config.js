var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
    output: {
        filename: './dist/bundle.js'
    },
    devServer: {
        inline: true,
        port: 8081,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }, 
    devtool: 'source-map',
    plugins:[new webpack.HotModuleReplacementPlugin()]
};
