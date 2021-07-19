import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Member } from 'src/database/enitity/member.entity';
import { Bank } from 'src/database/enitity/bank.entity';
// import { CompanyBank } from './../Bank/companybank.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Member, Bank],
    synchronize: true,
    // debug: true    :: for debug mysql
    timezone: 'Asia/Bangkok',
    extra: {
      charset: 'utf8mb4',
    },
    logging: ['query', 'error'],
    migrations: ['dist/database/migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
  }),
);
