import { User, Gender } from "../../../entity/User";
import UserGateway from "../interface/UserGateway";
import { db } from "../../../infra/db/DbConfigs";
import { OkPacket, RowDataPacket } from "mysql2";
import UserQueries from "./queries/UserQueries";

export default class UserGatewayImpl implements UserGateway {
    create(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            db.query<OkPacket>(
                UserQueries.CREATE_NEW_USER,
              [user.full_name, user.email, user.password, user.gender, user.avatar_url],
              (err, res) => {
                if (err) reject(err)
                else
                  resolve(user)
              }
            )
          })
    }
    
    findAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            db.query<User[]>(
              UserQueries.FIND_ALL_USERS,
              (err, res) => {
                if (err) reject(err)
                else resolve(res)
              }
            )
          })
      
    }

}