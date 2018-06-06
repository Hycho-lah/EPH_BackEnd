import { Module } from '@nestjs/common';
import { DatabaseModule } from './DataBase/database.module';
import { WeatherModule } from './Weather/weather.module';
import { INYPersonModule } from './NY_Person_Info/INYPerson.module';

@Module({
  imports: [
    DatabaseModule,
    WeatherModule,
    INYPersonModule,
  ],
})
export class AppModule {}
