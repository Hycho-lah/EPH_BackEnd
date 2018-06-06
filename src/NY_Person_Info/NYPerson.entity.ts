import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { AddressEntity } from '../Address/address.entity';

@Entity()
export class NYPersonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  oldParticipantId: string;
  @Column('varchar')
  lastName: string;
  @Column('varchar')
  firstName: string;
  @Column('char')
  phone: number;
  @Column('varchar')
  email: string;
  @Column('date')
  birthDate: any;
  @Column('tinyint')
  sex: any;
  // for NY_ReviewofSymptoms_Intakes
  // for NY_SF36_Intakes
  // @OneToMany(type => )
  // studyId: number;
  @ManyToOne(type => AddressEntity, address => address.NYPerson)
  addressId: NYPersonEntity;
}