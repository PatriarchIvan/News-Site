const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/test.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            overlay: true,
        },
        port: 9000
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: './css/style.css'
        })
    ]
};