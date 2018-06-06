import { Connection} from 'typeorm';
import { WeatherEntity} from './weather.entity';

export const weatherProvider = {
  provide: 'WeatherProvider',
  useFactory: (connection: Connection) => connection.getRepository(WeatherEntity),
  inject: ['DbConnectionToken'],
};