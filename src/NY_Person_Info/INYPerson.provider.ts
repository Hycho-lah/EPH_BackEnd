import { Connection} from 'typeorm';
import { INYPersonEntity} from './INYPerson.entity';


export const INYPersonProvider = {
  provide: 'INYPersonProvider',
  useFactory: (connection: Connection) => connection.getRepository(INYPersonEntity),
  inject: ['DbConnectionToken'],
};