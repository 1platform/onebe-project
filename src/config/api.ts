import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";

const defaultAPIConfig: IConfig = {
  path: Env.string("API_PATH", "/api"),
};

export default defaultAPIConfig;
