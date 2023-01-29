import { RowDataPacket } from "mysql2"

export interface Address extends RowDataPacket{
    id?: number,
    street: string,
    distict: string,
    city: string,
    postalCode: string
}