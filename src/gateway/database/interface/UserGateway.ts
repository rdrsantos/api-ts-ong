import { User } from "../../../entity/User";

export default interface UserGateway {
    findAll(callback?: Function): User[];
    create(user: User, callback?: Function): User;
}