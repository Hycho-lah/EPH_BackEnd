import { Controller, Get, Patch, Post, Delete, Param, Body} from '@nestjs/common';
import { WeatherService} from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private weatherService: WeatherService,
  ){}
  @Get()
  public async getAllWeather() {
    const msg = await this.weatherService.getAllWeather();
    return msg;
  }
  @Get(':id')
  public async getWeatherById(@Param() params) {
    const msg = await this.weatherService.getWeatherById(params.id);
    return msg;
  }
  @Post()
  public async addWeather(@Body() weather) {
    const msg = await this.weatherService.addWeather(weather);
    return msg;
  }
  @Patch(':id')
  public async updateWeather(@Body() newWeather,@Param() params){
    const msg = await this.weatherService.updateWeather(newWeather, params.id);
    return msg;
  }
  @Delete(':id')
  public async deleteWeather(@Param() params) {
    const msg = await this.weatherService.deleteWeather(params.id);
    return msg;
  }
}