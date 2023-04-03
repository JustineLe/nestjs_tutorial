import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer() {
        return {
            id: 1,
            email: 'test@gmail.com',
            createdAt: new Date(),
        }
    }
}
