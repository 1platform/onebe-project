import Env from "@sparkdev/onebe/dist/System/Env";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";

const defaultDocsConfig: IConfig = {
  expose: Env.flag("EXPOSE_DOCS"),
};

export default defaultDocsConfig;
