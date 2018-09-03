import { TsrpcClient } from 'tsrpc-browser';
import PtlDemo from '../shared/protocols/PtlDemo';
import { ReqDemo } from '../shared/protocols/PtlDemo';

let client = new TsrpcClient({
    serverUrl: 'http://localhost:3000'
});

(async function () {
    let res = await client.callApi(PtlDemo, {
        a: 'aaaa',
        b: [1, 2, 3],
        c: 'f',
        d: {
            d1: '6666',
            d2: 1111
        }
    });
    console.log(res);
})()