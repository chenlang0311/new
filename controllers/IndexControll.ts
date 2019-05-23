import {
    controller,
    httpGet,
    interfaces,
    injectable,
    inject,
    Router
}from "../ioc";
import TYPES from "../constant/tags"

@controller("/")
export default class IndexController implements interfaces.Controller{
    private indexService;
    constructor(@inject(TYPES.IndexService) indexService){
        this.indexService = indexService
    }
    @httpGet("/")
    private async index(ctx: Router.IRouterContext,next:()=>Promise<any>):Promise<any>{
        const result:string = this.indexService.getUser();
        ctx.body = await ctx.render("index");
    }
}   