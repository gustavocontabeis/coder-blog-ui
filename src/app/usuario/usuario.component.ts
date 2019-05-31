import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { UsuarioService } from './usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  usuario: Usuario = new Usuario();
  usuarios = [];

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.consultar();
    this.criarFormUsuario();
  }
  /** https://medium.com/manacespereira/angular-ractiveforms-valida%C3%A7%C3%B5es-customizadas-com-formul%C3%A1rios-reativos-no-angular-6-3a3338f9add9 */
  criarFormUsuario() {
    this.formularioDeUsuario = this.fb.group({
      id: [''],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      senha: ['', Validators.compose([Validators.email])],
      email: ['', Validators.compose([Validators.required])],
      tipoUsuario: ['', Validators.compose([Validators.required])],
    });
  }

  enviarDados() {
    console.log(this.formularioDeUsuario.value);
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
    this.usuarioService.consultar().subscribe(
      resposta => this.usuarios = <any>resposta
    );
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
