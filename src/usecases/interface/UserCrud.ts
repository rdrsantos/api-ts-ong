import { User } from "../../entity/User"

export interface UserCrud {
    findAll(callback: Function): User[]
    create(user: User, callback: Function): User
}