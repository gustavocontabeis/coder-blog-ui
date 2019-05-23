import { DepartamentoService } from './../departamento/departamento-list.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../entity/post';
import { PostService } from './post.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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

  selecionar(post: Post) {
    this.post = post;
  }

  excluir() {
    this.postService.excluir(this.post).subscribe(() => {
      this.novo();
      this.consultar();
    });
  }

}
