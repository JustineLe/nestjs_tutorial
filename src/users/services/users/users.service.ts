import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';
import { plainToClass } from 'class-transformer'

@Injectable()
export class UsersService {
    private users: User[] = [{
        username: 'bon',
        password: 'user1234',
    }
    ]

    getUser() {
        // return this.users.map((user) => plainToClass(SerializedUser, user));
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
