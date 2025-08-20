import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Categorias } from './pages/categorias/categorias';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'sobre',
    component: Sobre
  },
  {
    path: 'categorias',
    component: Categorias
  },
  {
    path: 'contato',
    component: Contato
  },

];
