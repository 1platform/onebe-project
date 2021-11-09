import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";

const defaultAPIConfig: IConfig = {
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
