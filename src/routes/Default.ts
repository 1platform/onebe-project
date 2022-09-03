import { AuthContextAPI, ContextAPI, GET, Path, Route } from "onebe/Router";
import { HTTPStatus } from "onebe/HTTP";
import { ResponseDocs } from "onebe/Documentation";
import { getDefaultLogger } from "onebe/System/Logger";

@Path("/", "Root", "Main Entrypoint of the application")
export default class Default extends Route {
  @GET<any, HTTPStatus>("/", true)
  @ResponseDocs.Status(HTTPStatus.OK)
  public async getSample(context: ContextAPI, authContext: AuthContextAPI): Promise<HTTPStatus> {
    getDefaultLogger().debug(context.pageURL);
    getDefaultLogger().debug([ context.body, context.parameters ]);
    return HTTPStatus.OK;
  }
}
