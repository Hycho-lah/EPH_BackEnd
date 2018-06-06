import { DatabaseModule} from '../DataBase/database.module';
import { NYPersonProvider} from './NYPerson.provider';
import { NYPersonController} from './NYPerson.controller';
import { NYPersonService} from './NYPerson.service';
import { Module} from '@nestjs/common';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    NYPersonController,
  ],
  components: [
    NYPersonProvider,
    NYPersonService,
  ],
})

export class NYPersonModule {}