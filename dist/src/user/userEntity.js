import crypto from 'node:crypto';
export class User {
    constructor(userName, nameAndSurname, email, userPhoto, favoriteRecords, userId = crypto.randomUUID()) {
        this.userName = userName;
        this.nameAndSurname = nameAndSurname;
        this.email = email;
        this.userPhoto = userPhoto;
        this.favoriteRecords = favoriteRecords;
        this.userId = userId;
    }
}
//# sourceMappingURL=userEntity.js.map