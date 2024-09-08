import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'access', // Ensure this is the correct path for the AccessPage
    loadChildren: () => import('./access/access.module').then(m => m.AccessPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./user/user/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./user/user/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: '',
    redirectTo: 'access', // Default path
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
