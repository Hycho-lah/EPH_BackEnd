import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class INYPersonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  oldParticipantId: string;
  @Column('char')
  addressId: number;
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
  // @OneToMany(type => )
  // studyId: number;
}