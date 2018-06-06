import { Controller, Get, Patch, Post, Delete, Param, Body} from '@nestjs/common';
import { AddressService} from './address.service';
@Controller('address')
export class AddressController {
  constructor(
    private addressService: AddressService,
  ){}
  @Get()
  public async getAllAddress(){
    const msg = await this.addressService.getAllAddress();
    return msg;
  }
  @Get(':id')
  public async getAddressById(@Param() params){
    const msg = await this.addressService.getAddressById(params.id);
    return msg;
  }
  @Post()
  public async addAddress(@Body() address){
    const msg = await this.addressService.addAddress(address);
    return msg;
  }
  @Patch(':id')
  public async updateAddress(@Param() params,@Body() newAddress){
    const msg = await this.addressService.updateAddress(params.id, newAddress);
    return msg;
  }
  @Delete(':id')
  public async deleteAddress(@Param() params){
    const msg = await this.addressService.deleteAddress(params.id);
    return msg;
  }
}