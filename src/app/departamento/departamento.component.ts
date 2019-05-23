import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from './departamento-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html'
})
export class DepartamentoComponent implements OnInit {

  constructor(
    private departamentoListService: DepartamentoService,
    private messageService: MessageService
    ) { }

  departamento = {};
  departamentos = [];

  ngOnInit() {
      this.consultar();
  }

  consultar() {
    this.departamentoListService.listar().subscribe(resposta => this.departamentos = <any> resposta);
  }

  adicionar() {
    this.departamentoListService.adicionar(this.departamento)
      .subscribe(() => {
        this.departamento = {};
        this.consultar();
        this.messageService.add({severity: 'success', summary: 'Departamento adicionado com sucesso.'});
      },
      resposta => {
        let msg = 'Erro inesperado. Tente Novamente';
        if (resposta.error.message) {
          msg = resposta.error.message;
        }
        this.messageService.add({severity: 'error', summary: msg});
      });
  }

  remover() {
    console.log('---------------- remover ---------------', this.departamento);
    this.departamentoListService.remover(this.departamento)
      .subscribe(() => {
        this.departamento = {};
        this.consultar();
      });
  }

  removerSelecionado(departamento: any) {
    this.departamento = departamento;
    this.remover();
  }

  selecionar(d: any) {
    console.log('---------------- selecionar ---------------', d);
    this.departamento = d;
    this.messageService.add({severity: 'error', summary: 'Selecionado: ' + this.departamento});
  }

}
