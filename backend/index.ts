import 'k8w-extend-native';
import { TsrpcServer } from 'tsrpc';
import * as path from 'path';

let server = new TsrpcServer({
    protocolPath: path.resolve(__dirname, 'shared/protocols'),
    apiPath: path.resolve(__dirname, 'src/api'),
    autoImplement: true,
    defaultPort: 3001
});

//跨域
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

server.start();