import express, {Request, Response} from "express";
import { User } from "../entity/User";
import {userCrudImpl} from "../infra/dependenciesConfigs/UserDependencies"

const userRouter = express.Router()

userRouter.get("/users",async (req:Request, res: Response) => {
    userCrudImpl.findAll((err: Error, users: User[]) => {
        if(err) {
            return res.status(500).json({"message": err.message})
        }

        return res.status(200).json(users)
    })    
})

userRouter.post("/users",async (req: Request, res: Response) => {
    const user = req.body
    userCrudImpl.create(user, (err: Error, orderId: number) => {
        if(err) res.status(500).json({"message": err.message})
        
        res.status(200).json(user)
    })
})

export {userRouter}