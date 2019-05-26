import {Container,injectable,inject} from "inversify"; 
import {controller, httpGet,interfaces,TYPE} from "inversify-koa-utils";
import {provide,fluentProvide,buildProviderModule} from "inversify-binding-decorators";
import * as Router from "koa-router";
import TAGS from "../constant/tags" ;

let provideThrowable = (identifier,name)=>{
    return fluentProvide(identifier)
    .whenTargetNamed(name)
    .done();
}
export {
    Container,
    controller,
    httpGet,
    interfaces,
    injectable,
    inject,
    Router,
    provide,
    TAGS,
    provideThrowable,
    TYPE,
    buildProviderModule
}