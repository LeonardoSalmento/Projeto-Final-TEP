import { Time } from '@angular/common';

export interface Projeto {
    id: number;
    nome: string;
    data_prazo: Date;
    hora_prazo: Time;
    status_projeto: string;
    
}


export interface Tarefa {
    id: number;
    nome: string;
    data_prazo: Date;
    hora_prazo: Time;
    status_tarefa: string;
    
}
