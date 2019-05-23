import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/departamentos';
  }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }

  adicionar(departamento: any) {
    return this.httpClient.post(this.apiUrl, departamento);
  }

  remover(departamento: any) {
    return this.httpClient.delete(this.apiUrl + '/' + departamento.id);
  }
}
