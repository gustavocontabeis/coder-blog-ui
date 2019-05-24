import { Post } from './../entity/post';
import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vizualizar-post',
  templateUrl: './vizualizar-post.component.html',
  styleUrls: ['./vizualizar-post.component.css']
})
export class VizualizarPostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log( id );
    this.postService.buscar(Number(id)).subscribe(x => this.retorno(x));
  }

  retorno(x) {
    this.post = x;
    console.log(x);
  }

}
