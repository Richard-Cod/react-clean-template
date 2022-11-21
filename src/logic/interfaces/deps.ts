import HttpAuthenticator from "./authenticator/HttpAuthenticator";
import {InMemoryAuthenticator} from "./authenticator/InMemoryAuthenticator";
import { IAuthenticator } from "./authenticator/IAuthenticator";
import { HttpCategoryRepo } from "./repositories/CategoryRepo/HttpCategoryRepo";
import { ICategoryRepo } from "./repositories/CategoryRepo/ICategoryRepo";


class DependencyContainer{
    authenticator : IAuthenticator
    categoryRepo:ICategoryRepo


    constructor(){
        this.authenticator = new InMemoryAuthenticator()
        this.categoryRepo = new HttpCategoryRepo()
    }
}

export {DependencyContainer}