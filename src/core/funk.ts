import * as HTTP from 'http';
import { IncomingMessage, OutgoingMessage } from 'http';

export type ResponseCallback = (req: IncomingMessage, res: OutgoingMessage) => void;

export type JamRouteCallback = {
  url: string;
  cbs: ProtocolsCbs;
};

export interface ProtocolsCbs {
  get?: ResponseCallback;
  post?: ResponseCallback;
  put?: ResponseCallback;
  patch?: ResponseCallback;
  delete?: ResponseCallback;
}

export const jam = (notFound: ResponseCallback, ...jamRouteCallbacks: JamRouteCallback[]) => {
  HTTP.createServer((req: IncomingMessage, res: OutgoingMessage) => {
    jamRouteCallbacks.forEach((cb: JamRouteCallback) => {
      if (cb.url === req.url && cb.cbs?.get) {
        cb.cbs.get(req, res);
      }
    });
    if (!res.writableEnded) notFound(req, res);
  }).listen(8080);
};
