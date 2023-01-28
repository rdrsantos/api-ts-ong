export interface User {
    id: number,
    full_name: string,
    email: string,
    password?: string,
    gender: Gender,
    avatar_url?: string
}

export type Gender = "M" | "F"