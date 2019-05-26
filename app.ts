import {InversifyKoaServer} from  "inversify-koa-utils";
import {Container,buildProviderModule} from "./ioc";
import "reflect-metadata";
import "./ioc/loader";
import co from "co";
import * as render from "koa-swig";
import * as serve from "koa-static";
import errorHandler from "./middleware/errorHandler";
import * as log4js from "log4js";
import config from "./config";
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/yd.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});

const logger = log4js.getLogger('cheese');



const container =new Container();
let server = new InversifyKoaServer(container);
//容器跟刚才的注册的机制绑定在一起 让所有的provide生效
container.load(buildProviderModule())

server.setConfig(app => {
    app.use(serve(config.staticDir));
    //注入我们的路由机制
    app.context.render = co.wrap(render({
        root: config.viewDir,
        autoescape: true,
        cache: "memory",
        ext: 'html',
        // varControls: ["[[", "]]"],
        writeBody: false
    }));
}).setErrorConfig(app => {
    errorHandler.error(app, logger);
})


let app = server.build();

app.listen(3000,()=>{
    console.log("inversify 实践solid 创建实例");
})