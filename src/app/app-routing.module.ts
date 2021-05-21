import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingredientes',
    loadChildren: () => import('./ingrediente/ingredientes/ingredientes.module').then( m => m.IngredientesPageModule)
  },
  {
    path: 'novo-ingrediente',
    loadChildren: () => import('./ingrediente/novo-ingrediente/novo-ingrediente.module').then( m => m.NovoIngredientePageModule)
  },
  {
    path: 'edita-ingrediente/:id',
    loadChildren: () => import('./ingrediente/edita-ingrediente/edita-ingrediente.module').then( m => m.EditaIngredientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
