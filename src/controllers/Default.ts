import app from "@sparkdev/onebe/dist/App";
import { method } from "@sparkdev/onebe/dist/Docs/DocsDecorators";
import { TRoutesList } from "@sparkdev/onebe/dist/Docs/DocsInterfaces";
import DocsStore from "@sparkdev/onebe/dist/Docs/DocsStore";
import SwaggerUI from "@sparkdev/onebe/dist/Docs/SwaggerUI";
import HTTPStatus from "@sparkdev/onebe/dist/HTTP/HTTPStatus";
import Route from "@sparkdev/onebe/dist/Router/Route";
import { path } from "@sparkdev/onebe/dist/Router/RouteDecorators";
import {
  IAuthContext,
  IContext,
} from "@sparkdev/onebe/dist/Router/RouteInterfaces";
import { GET } from "@sparkdev/onebe/dist/Router/VerbsDecorators";
import Config from "@sparkdev/onebe/dist/System/Config";
import IConfig from "@sparkdev/onebe/dist/System/IConfig";
import DefaultLogger from "@sparkdev/onebe/dist/System/Logger";

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
        },
        customSiteTitle: `${ app.app.appName } API`,
        isExplorer: true,
      })
    );
  }

  @GET<any, HTTPStatus>("/", true)
  @method.responseStatus(HTTPStatus.OK)
  public getSample(context: IContext, authContext: IAuthContext): HTTPStatus {
    DefaultLogger.debug(context.req.pageURL);
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
