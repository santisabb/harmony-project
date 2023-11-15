import { Repository } from "../shared/repository.js"
import { User } from "./userEntity.js"

const users = [
    new User(
        'santisabb10',
        'Santiago Sabbioni',
        'santisabbio@gmail.com',
        'link a img',
        [
            '542',
            'EL AFTER DEL AFTER',
            'Desde el fin del mundo',
        ],
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
        )
]

export class UserRepository implements Repository<User>{
    findAll(): User[] | undefined {
        return users
    }
    findOne(i: { id: string; }): User | undefined {
        return users.find((user)=> user.userId === i.id)
    }
    add(i: User): User | undefined {
        users.push(i)
        return i
    }
    update(i: User): User | undefined {
        const userIdx = users.findIndex((user)=> user.userId === i.userId)

        if (userIdx !== -1){
            users[userIdx] = { ...users[userIdx], ...i}
        }
        return users[userIdx]
    }
    delete(i: { id: string; }): User | undefined {
        const userIdx = users.findIndex((user)=> user.userId === i.id)

        if(userIdx !== -1){
            const deletedUsers = users[userIdx]
            users.splice(userIdx, 1)
            return deletedUsers
        }
    }
}