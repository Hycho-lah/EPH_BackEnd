import { DatabaseModule} from '../DataBase/database.module';
import { weatherProvider} from './weather.provider';
import { WeatherController} from './weather.controller';
import { WeatherService} from './weather.service';
import { Module} from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  components: [
    WeatherService,
    weatherProvider,
  ],
  controllers: [
    WeatherController,
  ],
})

export class WeatherModule {}