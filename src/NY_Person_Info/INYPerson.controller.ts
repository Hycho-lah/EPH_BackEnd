import { Controller, Get, Patch, Post, Delete, Param, Body} from '@nestjs/common';
import { INYPersonService} from './INYPerson.service';

@Controller('INYPerson')
export class INYPersonController {
  constructor(
    private INYPersonServce: INYPersonService,
  ){}
  @Get()
  public async getAllINYPerson() {
    const msg = await this.INYPersonServce.getAllINYPerson();
    return msg;
  }
  @Get(':id')
  public async getINYPersonById(@Param() params) {
    const msg = await this.INYPersonServce.getINYPersonById(params.id);
    return msg;
  }
  @Post()
  public async addINYPerson(@Body() INYPerson){
    const msg = await this.INYPersonServce.addINYPerson(INYPerson);
    return msg;
  }
  @Patch(':id')
  public async updateINYPerson(@Body() NewINYPerson,@Param() params){
    const msg = await this.INYPersonServce.updateINYPerson(params.id, NewINYPerson);
    return msg;
  }
  @Delete(':id')
  public async deleteINYPerson(@Param() params){
    const msg = await this.INYPersonServce.deleteINYPerson(params.id);
    return msg;
  }
}
