import { User } from "../../../entity/User";

export default interface UserGateway {
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
}