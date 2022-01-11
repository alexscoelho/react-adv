import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "Lazylayout"*/ '../01-lazyload/layout/LazyLayout'
    )
);
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2')
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    to: 'lazyload/',
    path: '/lazyload//*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
