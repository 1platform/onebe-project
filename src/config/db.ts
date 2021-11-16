import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";

const defaultDBConfig: IConfig = {
  engine: Env.string("DATABASE_ENGINE", "mongodb"),
  mongo: {
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
  },
  mysql: {
    engine: "mysql",
    hostname: Env.string("DATABASE_MYSQL_HOSTNAME", "localhost"),
    port: Env.int("DATABASE_MYSQL_PORT", 3306),
    username: Env.string("DATABASE_MYSQL_USERNAME", "root"),
    password: Env.string("DATABASE_MYSQL_PASSWORD", ""),
    database: Env.string("DATABASE_MYSQL_DATABASE", "onebe"),
  },

  entities: [ Env.string("DATABASE_ENTITIES", "./src/models/**/*.ts") ],
};

export default defaultDBConfig;
