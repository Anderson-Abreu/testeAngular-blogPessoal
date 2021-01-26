import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntarComponent } from './entar/entar.component';

const routes: Routes = [
  {path:'',redirectTo:'entrar',pathMatch:'full'},

  
  {path:'entrar',component: EntarComponent},
  {path:'cadastrar',component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
