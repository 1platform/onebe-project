import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";
import LogLevel from "@sparkdev/onebe/dist/System/LogLevel";

const defaultLogsConfig: IConfig = {
  level: Env.string("LOG_LEVEL", LogLevel.INFO),
  file: Env.string("LOG_FILE", "app.log"),
  folder: Env.string("LOG_FOLDER", "./storage/logs"),
};

export default defaultLogsConfig;
