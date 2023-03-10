import { User } from "../entity/User";
import UserGateway from "../gateway/database/interface/UserGateway";
import { UserCrud } from "./interface/UserCrud";

export default class UserCrudImpl implements UserCrud {
    private userGateway: UserGateway;

    constructor(userGateway: UserGateway) {
      this.userGateway = userGateway; 
    }

    async create(user: User): Promise<User> {
        if(user.gender === "M") {
            user.avatar_url = "https://cdn.vectorstock.com/i/1000x1000/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.webp"
        } else {
            user.avatar_url = "https://cdn.vectorstock.com/i/1000x1000/45/94/default-avatar-profile-icon-grey-photo-vector-31934594.webp"
        }
        const userCreated = await this.userGateway.create(user);
        return userCreated;
    }

    async findAll(): Promise<User[]> {
        return await this.userGateway.findAll();
    }
}