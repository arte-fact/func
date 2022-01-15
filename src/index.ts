import { jam } from './core/funk';
import { indexView } from './ui/views/index.view';
import { notFoundView } from './ui/views/404.view';

jam(notFoundView, { url: '/', cbs: { get: indexView } });
