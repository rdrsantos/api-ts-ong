import express, {Request, Response} from "express";
import {userCrudImpl} from "../infra/dependenciesConfigs/UserDependencies"

const userRouter = express.Router()

userRouter.get("/users",async (req:Request, res: Response) => {
    const users = await userCrudImpl.findAll() 
    return res.status(200).json(users)
})

userRouter.post("/users",async (req: Request, res: Response) => {
    const user = req.body
    const userCreated = await userCrudImpl.create(user)
    return res.status(201).json(userCreated)
})

export {userRouter}