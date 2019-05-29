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
  id: number;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.post = new Post();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.buscar(this.id).subscribe(ret => this.retorno(ret));
  }

  retorno(ret) {
    this.post = ret;
    //console.log(this.post);
  }

}
