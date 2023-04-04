import { Controller, Get, ParseIntPipe, HttpStatus, HttpException, ValidationPipe } from '@nestjs/common';
import { Body, Param, Post, Req, Res, UsePipes } from '@nestjs/common/decorators';
import { Response } from 'express';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) { }
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number, 
    @Req() req: Request, 
    @Res() res: Response,
    ) {
    const customer =  this.customersService.findCustomerById(id);
    if (customer){
      res.send(customer);
    }
    else {
      res.status(HttpStatus.NOT_FOUND).send({msg: "Customer not found"});
    }
  }

  @Get('/search/:id')
  searchCustomerById(
    @Param('id', ParseIntPipe) id: number
  ) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found!', HttpStatus.NOT_FOUND)
  }

  @Get('')
  getAllCustomers() {
    return this.customersService.getCustomer();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(
    @Body() createCustomerDto: createCustomerDto
  ){
    this.customersService.createCustomer(createCustomerDto);
  }
}
