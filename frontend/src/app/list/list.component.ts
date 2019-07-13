import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Projeto, Tarefa } from '../projeto-item';
import { Time } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl:'./list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projetos: Projeto[];
  tarefas: Tarefa[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProjetoItems().subscribe(
      (projetos: Projeto[]) => this.projetos = projetos,
      (error: any) => this.error = error
    );
    this.api.getTarefaItems().subscribe(
      (tarefas: Tarefa[]) => this.tarefas = tarefas,
      (error: any) => this.error = error
    );
  }

  addProjeto(itemNome: string, itemDataProjeto: Date, itemHoraProjeto: Time, itemStatus: string) {
    this.api.createProjeto(itemNome, itemDataProjeto, itemHoraProjeto, itemStatus).subscribe(
      (projeto: Projeto) => this.projetos.push(projeto)
    );
  }

  deleteProjeto(id: number) {
    this.api.deleteProjeto(id).subscribe(
      (success: any) => this.projetos.splice(
        this.projetos.findIndex(projeto => projeto.id === id)
      )
    );
  }

  addTarefa(itemNomeTarefa: string, itemDataTarefa: Date, itemHoraTarefa: Time, itemStatusTarefa: string) {
    this.api.createTarefa(itemNomeTarefa, itemDataTarefa, itemHoraTarefa, itemStatusTarefa).subscribe(
      (tarefa: Tarefa) => this.tarefas.push(tarefa)
    );
  }

  deleteTarefa(id: number) {
    this.api.deleteTarefa(id).subscribe(
      (success: any) => this.tarefas.splice(
        this.tarefas.findIndex(tarefa => tarefa.id === id)
      )
    );
  }
}
