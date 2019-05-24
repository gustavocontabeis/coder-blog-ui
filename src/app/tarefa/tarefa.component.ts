import { Post } from './../entity/post';
import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tabela = [
    [
      {titulo:"Concorrência com Java EE", subtitulo: 'Não podemos confundir o mundo Java SE com o Java EE quando se trata de concorrência.', imagem: 'assets/img/semaforo.png'},
      {titulo:"Maven do básico ao avançado", subtitulo: 'O maven é muito fácil para fazer coisas simples mas a sua complexidade aumenta conforme utilizamos seus recursos mais avançados.', imagem: 'assets/img/maven-logo.png'},
    ],
    [
      {titulo:"Maven: Filters", subtitulo: 'Incluir a versão do seu sistema no rodapé da sua página.', imagem: 'assets/img/img-03.jpg'},
      {titulo:"titulo 4", subtitulo: 'subtitulo 4', imagem: 'assets/img/img-04.jpg'},
    ],
  ];

  posts: Array<Post> = [];

  tabela2: Array<Array<Post>> = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.consular();
  }

  consular() {
    this.postService.consultar().subscribe(resposta => this.acao(resposta));
  }

  acao(resposta) {
    console.log(resposta);
    this.posts = resposta;
    let linha: Array<Post> = [];
    this.posts.forEach(element => {
        linha.push( element );
        if ( linha.length === 2 ) {
          this.tabela2.push( linha );
          linha = [];
        }
    });
  }

}
