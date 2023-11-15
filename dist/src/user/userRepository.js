import { User } from "./userEntity.js";
const users = [
    new User('santisabb10', 'Santiago Sabbioni', 'santisabbio@gmail.com', 'link a img', [
        '542',
        'EL AFTER DEL AFTER',
        'Desde el fin del mundo',
    ], 'a02b91bc-3769-4221-beb1-d7a3aeba7dad')
];
export class UserRepository {
    findAll() {
        return users;
    }
    findOne(i) {
        return users.find((user) => user.userId === i.id);
    }
    add(i) {
        users.push(i);
        return i;
    }
    update(i) {
        const userIdx = users.findIndex((user) => user.userId === i.userId);
        if (userIdx !== -1) {
            users[userIdx] = { ...users[userIdx], ...i };
        }
        return users[userIdx];
    }
    delete(i) {
        const userIdx = users.findIndex((user) => user.userId === i.id);
        if (userIdx !== -1) {
            const deletedUsers = users[userIdx];
            users.splice(userIdx, 1);
            return deletedUsers;
        }
    }
}
//# sourceMappingURL=userRepository.js.map