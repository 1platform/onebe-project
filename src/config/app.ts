import getVersion from "@sparkdev/onebe/dist/version";
import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";

const defaultAppConfig: IConfig = {
  debug: Env.flag("APP_DEBUG"),

  appName: Env.string("APP_NAME", "onebe by Spark"),
  appVersion: Env.string("APP_VERSION", getVersion()),
  appDescription: Env.string("APP_DESCRIPTION", ""),
};

export default defaultAppConfig;
