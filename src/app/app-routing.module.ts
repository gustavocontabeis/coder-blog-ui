import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PostComponent } from './post/post.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ExemploEventComponent } from './exemplo-event/exemplo-event.component';

import { TarefaComponent } from './tarefa/tarefa.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CompanhiaComponent } from './companhia/companhia.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';


const routes: Routes = [
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'post', component: PostComponent },
  { path: 'usuario-cad', component: UsuarioComponent },
  { path: 'exemplo-binding', component: ExemploBindingComponent },
  { path: 'exemplo-event', component: ExemploEventComponent },

  {path: 'tarefa', component: TarefaComponent},
  {path: 'caracteristicas', component: CaracteristicasComponent},
  {path: 'companhia', component: CompanhiaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar-noticia', component: CadastrarNoticiaComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
