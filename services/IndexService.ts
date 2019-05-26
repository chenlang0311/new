import {IIndex} from "../interface/IIndex";
import {Model} from "../models/User";
import {provide,TAGS} from "../ioc";


@provide(TAGS.IndexService)
export class IndexService implements IIndex{
    private userStorage:Model.User[]=[
        {
            name:"老袁",
            email:"1025518502@qq.com"
        },
        {

            name:"陈浪",
            email:"q1025518502@qq.com"
        }
    ]    
    getUser(id:string):Model.User{
        let result :Model.User;
        result = this.userStorage[id];
        return result;
    }
} 