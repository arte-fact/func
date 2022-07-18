import * as HTTP from 'http';
import { IncomingMessage, OutgoingMessage } from 'http';

export type ResponseCallback = (req: IncomingMessage, res: OutgoingMessage) => void;
export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export interface JamRouteInitResponses {
  GET?: ResponseCallback;
  POST?: ResponseCallback;
  PUT?: ResponseCallback;
  PATCH?: ResponseCallback;
  DELETE?: ResponseCallback;
}

export type JamRoute = Map<Method, ResponseCallback>;
export type JamRoutes = Map<string, JamRoute>;
export type JamRoutesInit = { url: string; responses: JamRouteInitResponses };

export const makeJamRoutes = (args: JamRoutesInit[]) => {
  const jamRoutes = new Map<string, JamRoute>();

  args.forEach((route) => {
    const responses = new Map<Method, ResponseCallback>();
    Object.keys(route.responses).forEach((key) => {
      const method: Method = key as Method;
      const response = route.responses[method];
      if (!response) {
        return;
      }
      responses.set(method, response);
    });
    jamRoutes.set(route.url, responses);
  });
  return jamRoutes;
};

export const jam = (notFound: ResponseCallback, ...jamRouteInit: JamRoutesInit[]) => {
  const jamRouteCallbacks = makeJamRoutes(jamRouteInit);
  HTTP.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    console.log(req.method, req.url);
    if (!req.url || !req.method || !jamRouteCallbacks.get(req.url)) {
      notFound(req, res);
      return;
    }
    (jamRouteCallbacks.get(req.url)?.get(req.method as Method) ?? notFound)(req, res);
  }).listen(8080);
};
