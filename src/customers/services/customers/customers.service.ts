import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer'

@Injectable()
export class CustomersService {

    private customers: Customer[] = [
        {
            id: 1,
            email: 'test@gmail.com',
            name: 'bobo',
        },
    ];

    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerDto: createCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomer() {
        return this.customers;
    }
}
