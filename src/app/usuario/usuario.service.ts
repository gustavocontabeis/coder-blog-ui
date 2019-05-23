import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../entity/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/usuarios';
  }

  adicionar(usuario: Usuario) {
    return this.httpClient.post(this.apiUrl, usuario);
  }

  consultar() {
    return this.httpClient.get(this.apiUrl);
  }

  excluir(usuario: Usuario) {
    console.log('xxxx');
    return this.httpClient.delete(this.apiUrl + '/' + usuario.id);
  }

}
