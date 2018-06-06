import { Connection} from 'typeorm';
import { NYPersonEntity} from './NYPerson.entity';
export const NYPersonProvider = {
  provide: 'NYPersonProvider',
  useFactory: (connection: Connection) => connection.getRepository(NYPersonEntity),
  inject: ['DbConnectionToken'],
};