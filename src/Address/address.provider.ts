import { Connection} from 'typeorm';
import { AddressEntity} from './address.entity';

export const AddressProvider = {
  provide: 'AddressProvider',
  useFactory: (connection: Connection) => connection.getRepository(AddressEntity),
  inject: ['DbConnectionToken'],
}