import {InversifyKoaServer} from  "inversify-koa-utils";
import {Container} from "./ioc";
import "reflect-metadata";
import "./ioc/loader";
const container =new Container();
let server = new InversifyKoaServer(container);

let app = server.build();

app.listen(3000,()=>{
    console.log("inversify 实践solid 创建实例");
})