import TsrpcPtl from "tsrpc-protocol";

const PtlDemo = new TsrpcPtl<ReqDemo, ResDemo>(__filename);
export default PtlDemo;

export interface ReqDemo{
    a: string;
    b: number[];
    c: 'm' | 'f';
    d: {
        d1: string;
        d2: number;
    }
}

export interface ResDemo {
    reply: string;
}