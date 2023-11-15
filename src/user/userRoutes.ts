import { Router } from "express"
import { santizeUserInput, findAll, findOne, add, update, remove } from "./userControler.js"

export const userRouter = Router()

userRouter.get('/', findAll)
userRouter.post('/', santizeUserInput, add)
userRouter.get('/:id', findOne)
userRouter. put('/:id', santizeUserInput, update)
userRouter.patch('/:id', santizeUserInput, update)
userRouter.delete('/:id', remove)