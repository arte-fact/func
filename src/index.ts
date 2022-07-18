import { jam } from './core/funk';
import { indexView } from './ui/views/index.view';
import { notFoundView } from './ui/views/404.view';
import { somePageView } from './ui/views/somePage.view';

jam(
  // 404
  notFoundView,
  // Routes
  { url: '/', responses: { GET: indexView } },
  { url: '/some-page', responses: { GET: somePageView } },
);
