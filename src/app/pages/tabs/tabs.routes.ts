import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DetalleNoticiaPage } from '../detalle-noticia/detalle-noticia.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'detalle-noticia',
        loadComponent: () =>
          import('../detalle-noticia/detalle-noticia.page').then((m) => DetalleNoticiaPage),
      },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full',
      },
  
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
