import { User } from "./userEntity.js"
import { UserRepository } from "./userRepository.js"
import { Request, Response, NextFunction } from "express"

const userRepo = new UserRepository()

function santizeUserInput (req:Request, res:Response, next:NextFunction){
    req.body.sanitizedInput ={
        userName: req.body.userName,
        nameAndSurname: req.body.nameAndSurname,
        email: req.body.email,
        userPhoto: req.body.userPhoto,
        favoriteRecords: req.body.favoriteRecords
    }

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
        }
    })
    next()
}

function findAll (req:Request, res:Response){
    res.json({ data: userRepo.findAll() })
}

function findOne(req:Request, res:Response){
    const id = req.params.id
    const user = userRepo.findOne({ id })

    if (!id){
        res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({message:'User founded', data: user})
}

function add(req:Request, res:Response){
    const input = req.body.sanitizedInput

    const userInput = new User(
        input.userName,
        input.nameAndSurname,
        input.email,
        input.userPhoto,
        input.favoriteRecords
    )

    const user = userRepo.add(userInput)
    return res.status(201).json({ message:'User created', data:user })
}

function update(req:Request, res:Response){
    req.body.sanitizedInput.userId = req.params.id
    const user = userRepo.update(req.body.sanitizedInput)

    if(!user){
        return res.status(404).json({ message:'User not found' })
    }
        
    return res.status(200).json({ message:'User succefuly updated', data:user })
}

    function remove(req:Request, res:Response){
        const id = req.params.id

        const user = userRepo.delete({ id })

        if(!user){
            return res.status(404).json({ message:'User not found' })
        }
        return res.status(200).json({ message:'User succefuly deleted' })
}


export { santizeUserInput, findAll, findOne, add, update, remove }