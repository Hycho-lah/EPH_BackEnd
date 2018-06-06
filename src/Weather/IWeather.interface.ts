export interface IWeatherInterface {
  readonly id: number;
  readonly date: any;
  readonly latitude: number;
  readonly longitude: number;
  readonly hourlySkyConditions: string;
  readonly hourlyRelativeHumidity: number;
  readonly hourlyWindSpeed: number;
  readonly hourlyWindDirection: number;
  readonly hourlyPrecip: number;
}