import { DatabaseModule} from '../DataBase/database.module';
import { INYPersonProvider} from './INYPerson.provider';
import { INYPersonController} from './INYPerson.controller';
import { INYPersonService} from './INYPerson.service';
import { Module} from '@nestjs/common';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    INYPersonController,
  ],
  components: [
    INYPersonProvider,
    INYPersonService,
  ],
})

export class INYPersonModule {}