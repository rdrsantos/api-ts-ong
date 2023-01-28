import { User, Gender } from "../../../entity/User";
import UserGateway from "../interface/UserGateway";
import { db } from "../../../infra/db/DbConfigs";
import { OkPacket, RowDataPacket } from "mysql2";

export default class UserGatewayImpl implements UserGateway {
    create(user: User, callback: Function): User {
       const query = "INSERT INTO user (full_name, email, password, gender, avatar_url) VALUES (?,?,?,?,?)"
        db.query(query,
            [user.full_name, user.email, user.password, user.gender, user.avatar_url],
            (err, result) => {
                if(err) {callback(err)}
                const insertId = (<OkPacket> result).insertId
                callback(null, insertId)
            })
        return user
    }
    
    findAll(callback: Function): User[] {
        const query = `
            SELECT * FROM user;
        `
        const users: User[] = []

        db.query(query, (err, result) => {
            if(err) {callback(err)}
        
            const rows = <RowDataPacket[]> result
            
            rows.forEach(row => {
                const user: User = {
                    id: row.id,
                    full_name: row.full_name,
                    email: row.email,
                    gender: row.gender
                }
                users.push(user)
            })
            callback(null, users)
        })
        return users
    }

}