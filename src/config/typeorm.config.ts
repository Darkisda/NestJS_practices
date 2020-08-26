import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config'
import { DataBaseInterfaceConfig } from './interfaces/database.interface';

const dbConfig = config.get<DataBaseInterfaceConfig>('db')

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: Number(process.env.PORT)  || 5432,
  username: process.env.RDS_USERNAME ||  dbConfig.username,
  password: process.env.RDS_PASSWORD ||  dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: Boolean(process.env.TYPEORM_SYNC) || dbConfig.synchronize,
};
