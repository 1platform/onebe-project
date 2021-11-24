import getVersion from "onebe/version";
import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";

const defaultAppConfig: IConfig = {
  debug: Env.flag("APP_DEBUG"),

  appName: Env.string("APP_NAME", "onebe by Spark"),
  appVersion: Env.string("APP_VERSION", getVersion()),
  appDescription: Env.string("APP_DESCRIPTION", ""),
};

export default defaultAppConfig;
