import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ExemploEventComponent } from './exemplo-event/exemplo-event.component';

import { TarefaComponent } from './tarefa/tarefa.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CompanhiaComponent } from './companhia/companhia.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';
import { VizualizarPostComponent } from './vizualizar-post/vizualizar-post.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCadastroComponent } from './post-cadastro/post-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DepartamentoComponent,
    UsuarioComponent,
    ExemploBindingComponent,
    ExemploEventComponent,
    TarefaComponent,
    CaracteristicasComponent,
    CompanhiaComponent,
    ContatoComponent,
    HomeComponent,
    CadastrarNoticiaComponent,
    VizualizarPostComponent,
    EscapeHtmlPipe,
    PostCadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule, PanelModule, InputTextModule, ButtonModule, ToastModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
