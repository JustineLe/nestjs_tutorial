import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    private users = [
        {
            id: 1,
            email: 'test@gmail.com',
            createdAt: new Date(),
        }
    ]
    findCustomerById(id: number) {
        return this.users.find((user) => user.id === id);
    }
}
