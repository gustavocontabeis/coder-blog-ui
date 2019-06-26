import { DepartamentoService } from './../departamento/departamento-list.service';
import { Post } from '../entity/post';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../entity/usuario';
import { Departamento } from '../entity/departamento';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-cadastro',
  templateUrl: './post-cadastro.component.html',
  styleUrls: ['./post-cadastro.component.css']
})
export class PostCadastroComponent implements OnInit {

  post: Post;
  posts: Post[];
  usuarios: Usuario[];
  departamentos: Departamento[];

  constructor(
    private postService: PostService,
    private usuarioService: UsuarioService,
    private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.novo();
    this.consultar();
  }

  consultar() {
    this.postService.consultar().subscribe(resposta => {this.posts = <any>resposta}, error => alert('erro post.'));
    this.usuarioService.consultar().subscribe(resposta => {this.usuarios = <any>resposta}, error => alert('erro usuarios.'));
    this.departamentoService.listar().subscribe(resposta => {this.departamentos = <any>resposta}, error => alert('erro departamentos.'));
  }

  novo() {
    this.post = new Post();
  }

  salvar() {
    this.postService.salvar(this.post)
      .subscribe(
        retorno => {
          console.log(retorno);
        },
        resposta => {
          if (!resposta.ok) {
            if (resposta.error.errors) {
              resposta.error.errors.forEach(element => {
                alert(element.defaultMessage);
              });
            }
          }
        },
        () => {
          console.log('complete');
        },
      );
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
