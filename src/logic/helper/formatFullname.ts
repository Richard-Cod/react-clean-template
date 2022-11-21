import { User } from "../models/User";


const formatFullname =  (user : User) => {
    return `${user.first_name} ${user.last_name}`;
}

export {formatFullname}