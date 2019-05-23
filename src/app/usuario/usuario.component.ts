import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultar();
  }

  novo() {
    this.usuario = new Usuario();
  }

  adicionar() {
    console.log(this.usuario);
    this.usuarios.push(this.usuario);
    this.usuarioService.adicionar(this.usuario)
      .subscribe(() => {

      });
    this.novo();
  }

  consultar() {
    this.usuarioService.consultar().subscribe(resposta => this.usuarios = <any> resposta);
  }

  selecionar(usuario: Usuario) {
    this.usuario = usuario;
  }

  excluir() {
    this.usuarioService.excluir(this.usuario).subscribe(() => {
      this.consultar();
    });
  }

}
