import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";

const defaultDBConfig: IConfig = {
  engine: Env.string("DATABASE_ENGINE", "mongodb"),
  mongo: {
    url: Env.string("DATABASE_MONGODB_URI", "mongodb://localhost:27017/onebe"),
  },
};

export default defaultDBConfig;
