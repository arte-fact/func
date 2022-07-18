import { ResponseCallback } from '../../core/funk';
import { centeredTitle } from '../components/centered-title.component';
import { linkComponent } from '../components/link.component';
import { baseLayout } from '../layouts/base.layout';

const somePageView: ResponseCallback = (_req, res) => {
  res.end(baseLayout(linkComponent('/', '<- Home'), centeredTitle('Some Page')));
};

export { somePageView };
