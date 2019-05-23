import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
})
export class ExemploBindingComponent implements OnInit {

  nome: string;
  urlImagem = 'http://lorempixel.com/400/200/';


  constructor() { }

  ngOnInit() {
  }

  salvar() {
    console.log(this.nome);
  }


}
