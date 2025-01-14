import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';
export default (): PostgresConnectionOptions => ({
  url: process.env.DB_URL,
  type: 'postgres',
  port: +process.env.PORT,
  entities: [path.resolve(__dirname, '..') + '/**/*.entity.{js,ts}'],
  synchronize: false,
});
