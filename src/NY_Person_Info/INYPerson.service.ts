import { Injectable, Inject} from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { INYPersonInfoInterface} from './INYPersonInfo.interface';
import { INYPersonEntity} from './INYPerson.entity';

@Injectable()
export class INYPersonService {
  constructor(
    @Inject('INYPersonProvider') private INYPersonRepository: Repository<INYPersonEntity>,
  ){}
  public async getAllINYPerson(): Promise<INYPersonEntity[]> {
    return await this.INYPersonRepository.find();
  }
  public async getINYPersonById(personId: number): Promise<INYPersonEntity|null> {
    return await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
  }
  public async addINYPerson(INYPerson: INYPersonInfoInterface): Promise<INYPersonEntity> {
    return await this.INYPersonRepository.save(INYPerson);
  }
  public async updateINYPerson(personId: number, newINYPerson: INYPersonInfoInterface): Promise<INYPersonEntity|null>{
    const selectedINYPerson = await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
    if (selectedINYPerson){
      await getConnection().createQueryBuilder().update(INYPersonEntity).set(newINYPerson)
        .where('id=:id', {id: personId})
        .execute();
    }else{
      return null;
    }
  }
  public async deleteINYPerson(personId: number): Promise<string> {
    const selectedINYPerson = await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
    if(selectedINYPerson){
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(INYPersonEntity)
        .where('id = :id', { id: personId})
        .execute();
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}