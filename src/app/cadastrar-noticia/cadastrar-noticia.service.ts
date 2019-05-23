import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarNoticiaService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/posts';
  }

  consultar() {
    return this.httpClient.get(this.apiUrl);
  }

  salvar(post) {
    return this.httpClient.post(this.apiUrl, post);
  }

  excluir(post) {
    return this.httpClient.delete(this.apiUrl + '/' + post.id);
  }
}
