import { DepartamentoService } from './../departamento/departamento-list.service';
import { CadastrarNoticiaService } from './cadastrar-noticia.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { UsuarioService } from '../usuario/usuario.service';
import { Post } from '../entity/post';

@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.component.html',
  styleUrls: ['./cadastrar-noticia.component.css']
})
export class CadastrarNoticiaComponent implements OnInit {

  post: Post;
  posts: [];
  usuarios: [];
  departamentos: [];

  constructor(
    private postService: PostService,
    private usuarioService: UsuarioService,
    private departamentoService: DepartamentoService) { }

    ngOnInit() {
      this.novo();
      this.consultar();
    }

    consultar() {
      this.postService.consultar().subscribe(resposta => this.posts = <any>resposta);
      this.usuarioService.consultar().subscribe(resposta => this.usuarios = <any>resposta);
      this.departamentoService.listar().subscribe(resposta => this.departamentos = <any>resposta);
    }

    novo() {
      this.post = new Post();
    }

  salvar() {
    console.log('111111111111111111');
    this.postService.salvar(this.post)
      .subscribe(() => {},
        resposta => {
          if (!resposta.ok) {
            if (resposta.error.errors) {
              resposta.error.errors.forEach(element => {
                alert(element.defaultMessage);
              });
            }
          }
        });
  }
}
