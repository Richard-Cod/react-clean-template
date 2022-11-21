// import { toast } from 'react-toastify';
import appConstants from '../../../../constants/constants';
import { User } from '../../../models/User';
import { LoginPayload } from '../../authenticator/IAuthenticator';
import { DependencyContainer } from '../../deps';
import { LocalDataRepository } from '../../LocalDataRepository';


class HomePageVM{
    dependencyContainer : DependencyContainer;

    constructor(){
        this.dependencyContainer =  new DependencyContainer()
    }

    getLoggedInUser = async () : Promise<User|null> => {
        const result = await this.dependencyContainer.authenticator.me()
        return result
    }


    getCategories = async () => {
        const result  = await  this.dependencyContainer.categoryRepo.getCategories()
        return result
    }

    

}

export default HomePageVM