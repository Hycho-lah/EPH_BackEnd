import { DatabaseModule} from '../DataBase/database.module';
import { AddressController} from './address.controller';
import { AddressService} from './address.service';
import { Module} from '@nestjs/common';
import { AddressProvider} from './address.provider';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    AddressController,
  ],
  components: [
    AddressService,
    AddressProvider,
  ],
})

export class AddressModule {}