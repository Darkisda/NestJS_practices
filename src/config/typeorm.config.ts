import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 50651,
  username: 'postgres',
  password: '2410',
  database: 'nest',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
