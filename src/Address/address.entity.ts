import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { NYPersonEntity } from '../NY_Person_Info/NYPerson.entity';
@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  houseId: number;
  @Column('char')
  state: any;
  @Column('char')
  county: any;
  @Column('varchar')
  city: any;
  @Column('char')
  zipCode: any;
  @Column('float')
  latitude: number;
  @Column('float')
  longitude: number;
  @OneToMany(type => NYPersonEntity, item => item.addressId)
  NYPerson: NYPersonEntity[];
}