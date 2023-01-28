import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "12345",
    database: "db"
})