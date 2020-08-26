import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';
import * as config from 'config'
import { ServerInterfaceConfig } from './config/interfaces/server.interface';

async function bootstrap() {
  const serverConfig = config.get<ServerInterfaceConfig>('server')
  const logger = new Logger('bootstrap')
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  const port = process.env.PORT || serverConfig.port
  await app.listen(port);
  logger.log(`Application listening on port ${port} `)
}
bootstrap();
