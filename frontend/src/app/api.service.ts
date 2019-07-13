import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

@Injectable()
export class ApiService {
  private apiRoot = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getProjetoItems() {
    return this.http.get(this.apiRoot.concat('projetos-list/'));
  }

  getTarefaItems() {
    return this.http.get(this.apiRoot.concat('tarefas-list/'));
  }

  createProjeto(nome: string, data_prazo: Date, hora_prazo: Time, status_projeto: string ) {
    return this.http.post(
      this.apiRoot.concat('projetos-list/'),
      { nome, data_prazo, hora_prazo, status_projeto }
    );
  }

  deleteProjeto(id: number) {
    return this.http.delete(this.apiRoot.concat(`projetos-list/${id}/`));
  }

  createTarefa(nome: string, data_prazo: Date, hora_prazo: Time, status_tarefa: string ) {
    return this.http.post(
      this.apiRoot.concat('tarefas-list/'),
      { nome, data_prazo, hora_prazo, status_tarefa }
    );
  }

  deleteTarefa(id: number) {
    return this.http.delete(this.apiRoot.concat(`projetos-list/${id}/`));
  }
  
}
