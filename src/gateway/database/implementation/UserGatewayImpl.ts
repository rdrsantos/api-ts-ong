import { User, Gender } from "../../../entity/User";
import UserGateway from "../interface/UserGateway";
import { db } from "../../../infra/db/DbConfigs";
import { OkPacket, RowDataPacket } from "mysql2";

export default class UserGatewayImpl implements UserGateway {
    create(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            db.query<OkPacket>(
                "INSERT INTO user (full_name, email, password, gender, avatar_url) VALUES (?,?,?,?,?)",
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
              "SELECT * FROM user",
              (err, res) => {
                if (err) reject(err)
                else resolve(res)
              }
            )
          })
      
    }

}