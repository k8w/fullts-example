const path = require('path');
const protocolPath = path.resolve(__dirname, 'shared/protocols')

module.exports = {
    entry: './src/index.ts',
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
            { test: /\.ts?$/, use: 'ts-loader' },
        ]
    }
}