import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";
import LogLevel from "onebe/System/LogLevel";

const defaultLogsConfig: IConfig = {
  level: Env.string("LOG_LEVEL", LogLevel.INFO),
  file: Env.string("LOG_FILE", "app.log"),
  folder: Env.string("LOG_FOLDER", "./storage/logs"),
};

export default defaultLogsConfig;
