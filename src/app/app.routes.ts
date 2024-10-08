import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detalle-noticia',
    loadComponent: () => import('./pages/detalle-noticia/detalle-noticia.page').then( m => m.DetalleNoticiaPage)
  },
];
