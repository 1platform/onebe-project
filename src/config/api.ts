import Env from "@sparkdev/onebe/src/System/Env";
import IConfig from "@sparkdev/onebe/src/System/IConfig";

const defaultAPIConfig: IConfig = {
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
