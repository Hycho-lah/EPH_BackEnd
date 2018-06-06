import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class WeatherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  date: any;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('varchar')
  hourlySkyConditions: string;

  @Column('float')
  hourlyRelativeHumidity: number;

  @Column('float')
  hourlyWindSpeed: number;

  @Column('float')
  hourlyWindDirection: number;

  @Column('float')
    hourlyPrecip: number;
}