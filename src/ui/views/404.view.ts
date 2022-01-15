import { baseLayout } from '../layouts/base.layout';
import { centeredTitle } from '../components/centered-title.component';
import { IncomingMessage, OutgoingMessage } from 'http';

export const notFoundView = (req: IncomingMessage, res: OutgoingMessage): void => {
  res.end(baseLayout(centeredTitle('404', 'NOT', 'FOUND 🦄')));
};
