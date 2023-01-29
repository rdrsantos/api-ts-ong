import { RowDataPacket } from "mysql2"

export interface User extends RowDataPacket{
    id: number,
    full_name: string,
    email: string,
    password?: string,
    gender: Gender,
    avatar_url?: string
}

export type Gender = "M" | "F"