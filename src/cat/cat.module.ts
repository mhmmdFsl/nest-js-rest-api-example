import { Logger, Module } from "@nestjs/common";
import { catProviders } from './cat.provider';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { DatabaseModule } from "../database/database.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [
    ...catProviders,
    CatService,
    Logger,

  ],
})
export class CatModule {}
