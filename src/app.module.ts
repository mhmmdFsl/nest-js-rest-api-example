import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './midleware/log.middleware';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import configuration from './configuration/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ignoreEnvFile: true}),
    CatModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LogMiddleware).forRoutes('demo');
  }
}
