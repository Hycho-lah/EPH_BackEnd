import { Injectable, Inject} from '@nestjs/common';
import { WeatherEntity} from './weather.entity';
import { getConnection, Repository } from 'typeorm';
import { IWeatherInterface} from './IWeather.interface';
// component already been replaced by injectable
@Injectable()
export class WeatherService{
  constructor(
    @Inject('weatherProvider') private readonly weatherRepository: Repository<WeatherEntity>,
  ) {}
  public async getAllWeather(): Promise<Array<WeatherEntity>>{
    return await this.weatherRepository.find();
  }
  public async getWeatherById(weatherId: number): Promise<WeatherEntity|null> {
    return await this.weatherRepository.findOneOrFail({where: {id: weatherId}});
  }
  public async addWeather(weather: IWeatherInterface): Promise<WeatherEntity> {
    return await this.weatherRepository.save(weather);
  }
  public async updateWeather(newWeather: IWeatherInterface, weatherId: number): Promise<WeatherEntity|null> {
    const selectedWeather = await this.weatherRepository.findOneOrFail({where: {id: weatherId}});
    if (selectedWeather) {
      await getConnection().createQueryBuilder()
        .update(WeatherEntity)
        .set(newWeather)
        .where('id=:id', {id: weatherId})
        .execute();
      return await this.weatherRepository.findOneOrFail({where: {id: weatherId}});
    }else{
      return null;
    }
  }
  public async deleteWeather(weatherId: number): Promise<string> {
    const selectedWeather = await this.weatherRepository.findOneOrFail({where: {id: weatherId}});
    if (selectedWeather) {
      await getConnection().createQueryBuilder()
        .delete()
        .from(WeatherEntity)
        .where('id = :id', {id: weatherId})
        .execute();
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}