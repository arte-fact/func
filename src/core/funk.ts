import * as HTTP from 'http';
import { IncomingMessage, OutgoingMessage } from 'http';

export type ResponseCallback = (req: IncomingMessage, res: OutgoingMessage) => void;

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type JamRoute = Map<Method, ResponseCallback>;

export const jam = (notFound: ResponseCallback, jamRouteCallbacks: Map<string, JamRoute>) => {
  HTTP.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    console.log(req.method, req.url);
    if (!req.url || !req.method || !jamRouteCallbacks.get(req.url)) {
      notFound(req, res);
      return;
    }
    (jamRouteCallbacks.get(req.url)?.get(req.method as Method) ?? notFound)(req, res);
  }).listen(8080);
};
