const path = require('path');

// 配置项
const protocolPath = path.resolve(__dirname, 'shared/protocols')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: v => v.startsWith(protocolPath),
                loader: 'tsrpc-protocol-loader',
                options: {
                    protocolPath: protocolPath
                }
            },
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpe?g|gif)$/, use: ['url-loader?limit=8192', 'img-loader'] }, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

        ]
    }
}