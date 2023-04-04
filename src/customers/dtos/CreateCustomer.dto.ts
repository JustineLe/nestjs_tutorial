import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumberString, ValidateNested, IsNotEmptyObject } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class createCustomerDto {

    @IsEmail()
    email: string;

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}