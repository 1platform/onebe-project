import Env from "@sparkdev/onebe/src/System/Env";
import IConfig from "@sparkdev/onebe/src/System/IConfig";

const defaultDocsConfig: IConfig = {
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
