import { Module,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoControllerController } from './demo-controller/demo-controller.controller';
import { NestModule } from './nest/nest.module';
import { NestController } from './nest/nest.controller';
import { LoggerMiddlewareMiddleware } from './logger-middleware/logger-middleware.middleware';
@Module({
  imports: [NestModule],
  controllers: [AppController, DemoControllerController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareMiddleware)
      .forRoutes(NestController);
  }
}
