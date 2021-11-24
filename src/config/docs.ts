import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";

const defaultDocsConfig: IConfig = {
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
