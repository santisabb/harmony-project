import express from "express"
import { userRouter } from "./src/user/userRoutes.js"

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' })
})

app.listen(8080, ()=>{
    console.log('server listening on http://localhost:8080')
})