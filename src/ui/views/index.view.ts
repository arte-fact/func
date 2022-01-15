import { baseLayout } from '../layouts/base.layout';
import { centeredTitle } from '../components/centered-title.component';
import { IncomingMessage, OutgoingMessage } from 'http';
import { ResponseCallback } from '../../core/funk';
import { linkComponent } from '../components/link.component';

export const indexView: ResponseCallback = (req: IncomingMessage, res: OutgoingMessage): void => {
  res.end(baseLayout(linkComponent('/', centeredTitle('NOW', 'FUNK', 'IT ! ⌨️'))));
};
