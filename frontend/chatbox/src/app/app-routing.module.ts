import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioEditComponent } from './resources/usuario/usuario-edit/usuario-edit.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { UsuarioLoginComponent } from './resources/usuario/usuario-login/usuario-login.component';
import { CategoriaEditComponent } from './resources/categoria/categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './resources/categoria/categoria-list/categoria-list.component';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { SalaEditComponent } from './resources/sala/sala-edit/sala-edit.component';
import { SalaListComponent } from './resources/sala/sala-list/sala-list.component';
import { MensagemEditComponent } from './resources/mensagem/mensagem-edit/mensagem-edit.component';
import { MensagemListComponent } from './resources/mensagem/mensagem-list/mensagem-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  /*
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
    canActivate: [AuthGuard]
  },*/
  {
    path: 'categoria-add',
    component: CategoriaEditComponent
  },
  {
    path: 'categoria-list',
    component: CategoriaListComponent
  },
  {
    path: 'usuario-add',
    component: UsuarioEditComponent
  },
  {
    path: 'usuario-login',
    component: UsuarioLoginComponent
  },
  {
    path: 'sala-add/:id',
    component: SalaEditComponent
  },
  {
    path: 'sala-list/:id',
    component: SalaListComponent
  },
  {
    path: 'mensagem-add/:id',
    component: MensagemEditComponent
  },
  {
    path: 'mensagem-list/:id',
    component: MensagemListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
