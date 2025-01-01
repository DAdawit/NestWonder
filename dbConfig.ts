import { Property } from 'src/entities/property.entity';
import { PostgresConnectionOptions } from './node_modules/typeorm/driver/postgres/PostgresConnectionOptions.d';
export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://realEstate_owner:U6Lj8ycPMOXu@ep-frosty-hill-a54bnkwj.us-east-2.aws.neon.tech/realEstate?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  synchronize: true,
};
