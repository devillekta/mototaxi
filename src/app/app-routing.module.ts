import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loader', pathMatch: 'full'},
  { path: 'loader', loadChildren: () => import('./paginas/loader/loader.module').then( m => m.LoaderPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chamados',
    loadChildren: () => import('./paginas/chamados/chamados.module').then( m => m.ChamadosPageModule)
  },
  {
    path: 'andamento',
    loadChildren: () => import('./paginas/andamento/andamento.module').then( m => m.AndamentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
