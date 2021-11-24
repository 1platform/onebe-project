import Env from "onebe/System/Env";
import IConfig from "onebe/System/IConfig";

const defaultLangConfig: IConfig = {
  defaultLang: Env.string("DEFAULT_LANG", "en"),
  fallbackLang: Env.string("DEFAULT_LANG", "en"),
  supportedLanguages: Env.string("SUPPORTED_LANGS", "en,ro").split(","),
  preload: Env.string("SUPPORTED_LANGS", "en,ro").split(","),
  cookie: Env.string("LANG_COOKIE", "onebe:lang"),
};

export default defaultLangConfig;
