import { User } from "../../entity/User"

export interface UserCrud {
    findAll(): Promise<User[]>
    create(user: User): Promise<User>
}