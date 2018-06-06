import { Injectable, Inject} from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { INYPersonInfoInterface} from './INYPersonInfo.interface';
import { NYPersonEntity} from './NYPerson.entity';

@Injectable()
export class NYPersonService {
  constructor(
    @Inject('NYPersonProvider') private INYPersonRepository: Repository<NYPersonEntity>,
  ){}
  public async getAllINYPerson(): Promise<NYPersonEntity[]> {
    return await this.INYPersonRepository.find();
  }
  public async getINYPersonById(personId: number): Promise<NYPersonEntity|null> {
    return await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
  }
  public async addINYPerson(INYPerson: INYPersonInfoInterface): Promise<NYPersonEntity> {
    return await this.INYPersonRepository.save(INYPerson);
  }
  public async updateINYPerson(personId: number, newINYPerson: INYPersonInfoInterface): Promise<NYPersonEntity|null>{
    const selectedINYPerson = await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
    if (selectedINYPerson){
      await getConnection().createQueryBuilder().update(NYPersonEntity).set(newINYPerson)
        .where('id=:id', {id: personId})
        .execute();
    }else{
      return null;
    }
  }
  public async deleteINYPerson(personId: number): Promise<string> {
    const selectedINYPerson = await this.INYPersonRepository.findOneOrFail({where: {id: personId}});
    if (selectedINYPerson){
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(NYPersonEntity)
        .where('id = :id', { id: personId})
        .execute();
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}