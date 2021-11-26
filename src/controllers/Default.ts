import app from "onebe/App";
import { method } from "onebe/Docs/DocsDecorators";
import { TRoutesList } from "onebe/Docs/DocsInterfaces";
import DocsStore from "onebe/Docs/DocsStore";
import SwaggerUI from "onebe/Docs/SwaggerUI";
import HTTPStatus from "onebe/HTTP/HTTPStatus";
import Route from "onebe/Router/Route";
import { path } from "onebe/Router/RouteDecorators";
import { IAuthContext, IContext } from "onebe/Router/RouteInterfaces";
import { GET } from "onebe/Router/VerbsDecorators";
import Config from "onebe/System/Config";
import IConfig from "onebe/System/IConfig";
import DefaultLogger from "onebe/System/Logger";

@path("/", "Root", "Main Entrypoint of the application")
export default class Default extends Route {
  public constructor() {
    super();
    app.HTTP.app.use(
      "/openapi",
      SwaggerUI.serve,
      SwaggerUI.setup(null, {
        swaggerOptions: {
          url: `${ Config.get("api.path") }/swagger.yaml`,
          persistAuthorization: true
        },
        customSiteTitle: `${ app.app.appName } API`,
        isExplorer: true,
      })
    );
  }

  @GET<any, HTTPStatus>("/", true)
  @method.responseStatus(HTTPStatus.OK)
  public getSample(context: IContext, authContext: IAuthContext): HTTPStatus {
    DefaultLogger.debug(context.request.pageURL);
    DefaultLogger.debug([ context.body, context.params ]);
    return HTTPStatus.OK;
  }

  @GET<any, TRoutesList>(Config.get("api.path"))
  public getDocs(context: IContext, authContext: IAuthContext): TRoutesList {
    return DocsStore.instance.getRoutes();
  }

  @GET<any, IConfig>(`${ Config.get("api.path") }/config`)
  public getConfig(context: IContext, authContext: IAuthContext): IConfig {
    return Config.all();
  }

  @GET<any, Record<string, string>>(`${ Config.get("api.path") }/swagger.yaml`)
  public getOpenAPI(
    context: IContext,
    authContext: IAuthContext
  ): Record<string, string> {
    return {
      contentType: "text/vnd.yaml",
      body: DocsStore.instance.getYaml(),
    };
  }
}
