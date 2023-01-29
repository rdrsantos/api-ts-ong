import express, {Request, Response} from "express";
import {userCrudImpl} from "../infra/dependenciesConfigs/UserDependencies"

const userRouter = express.Router()

userRouter.get("/users",async (req:Request, res: Response) => {
    try {
        const users = await userCrudImpl.findAll() 
        return res.status(201).json(users)
    } catch(err: any) {
        return res.status(500).json({message: err.message})
    }
})

userRouter.post("/users",async (req: Request, res: Response) => {
    const user = req.body
    try {
        const userCreated = await userCrudImpl.create(user)
        return res.status(201).json(userCreated)
    } catch(err: any) {
        return res.status(500).json({message: err.message})
    }
})

export {userRouter}