import { ApiRequest, ApiResponse } from "tsrpc";
import { ReqDemo, ResDemo } from "../../shared/protocols/PtlDemo";

export default async function ApiDemo(req: ApiRequest<ReqDemo>, res: ApiResponse<ResDemo>) {
    res.succ({
        reply: 'Hello ' + req.args.a
    })
}