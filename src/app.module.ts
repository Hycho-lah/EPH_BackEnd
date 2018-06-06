import { Module } from '@nestjs/common';
import { DatabaseModule } from './DataBase/database.module';
import { WeatherModule } from './Weather/weather.module';

@Module({
  imports: [
    DatabaseModule,
    WeatherModule,
  ],
})
export class AppModule {}
