import { jam, JamRoute } from './core/funk';
import { indexView } from './ui/views/index.view';
import { notFoundView } from './ui/views/404.view';
import { somePageView } from './ui/views/somePage.view';

const routes = new Map<string, JamRoute>();
routes.set('/', new Map().set('GET', indexView));
routes.set('/some-page', new Map().set('GET', somePageView));

jam(notFoundView, routes);
