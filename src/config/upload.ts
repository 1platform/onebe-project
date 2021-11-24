import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";

const defaultUploadConfig: IConfig = {
  temp: Env.string("UPLOAD_TEMP", "./tmp"),
  storage: Env.string("UPLOAD_DESTINATION", "./storage"),
  secret: Env.string("UPLOAD_SECRET", "test"),
};

export default defaultUploadConfig;
