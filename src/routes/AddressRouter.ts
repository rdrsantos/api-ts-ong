import express, {Request, Response} from "express"
import { addressCrudImpl } from "../infra/dependenciesConfigs/AddressDependencies"

const addressRouter = express.Router()

addressRouter.post("/address", async (req:Request, res: Response) => {
    const address = req.body
    try {
        const users = await addressCrudImpl.create(address) 
        return res.status(201).json(users)
    } catch(err: any) {
        return res.status(500).json({message: err.message})
    }
})

export {addressRouter}