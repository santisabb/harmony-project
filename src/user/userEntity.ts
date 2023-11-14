import crypto from 'node:crypto'

export class User{
    constructor(
        public userName: string,
        public nameAndSurname: string,
        public email: string,
        public userPhoto: string,
        public favoriteRecords: [],
        public userId = crypto.randomUUID()
    ){}
}