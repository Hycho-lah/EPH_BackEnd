import { Injectable, Inject} from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { AddressEntity} from './address.entity';
import { IAddressInterface} from './IAddress.interface';

@Injectable()
export class AddressService {
  constructor(
    @Inject('AddressProvider') private addressRepository: Repository<AddressEntity>,
  ){}
  public async getAllAddress(): Promise<Array<AddressEntity>> {
    return await this.addressRepository.find();
  }
  public async getAddressById(addressId: number): Promise<AddressEntity|null>{
    return await this.addressRepository.findOneOrFail({where: {id: addressId}});
  }
  public async addAddress(address: IAddressInterface): Promise<AddressEntity>{
    return await this.addressRepository.save(address);
  }
  public async updateAddress(addressId: number, newAddress: IAddressInterface): Promise<AddressEntity|null> {
    const selectedAddress = await this.addressRepository.findOneOrFail({where: {id: addressId}});
    if (selectedAddress){
      await getConnection().createQueryBuilder().update(AddressEntity).set(newAddress)
        .where('id = :id', {id: addressId})
        .execute();
      return await this.addressRepository.findOneOrFail({where: {id: addressId}});
    }else{
      return null;
    }
  }
  public async deleteAddress(addressId: number): Promise<string>{
    const selectedAddress =  await this.addressRepository.findOneOrFail({where: {id: addressId}});
    if (selectedAddress) {
      await getConnection().createQueryBuilder().delete().from(AddressEntity)
        .where('id = :id', { id: addressId })
        .execute();
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}