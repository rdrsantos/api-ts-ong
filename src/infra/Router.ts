import express from "express";
import { addressRouter } from "../routes/AddressRouter";
import { userRouter } from "../routes/UserRouter";
const router = express.Router()

router.use("/", userRouter)
router.use("/", addressRouter)

export {router}