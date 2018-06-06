import { Module } from '@nestjs/common';
import { DatabaseModule } from './DataBase/database.module';
import { WeatherModule } from './Weather/weather.module';
import { NYPersonModule } from './NY_Person_Info/NYPerson.module';
import { AddressModule } from './Address/address.module';

@Module({
  imports: [
    DatabaseModule,
    WeatherModule,
    NYPersonModule,
    AddressModule
  ],
})
export class AppModule {}
