import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '../cadastro/todo/todo.store';
import { Task } from '../_models/task';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class TarefaService extends BaseService {
  constructor(private http: HttpClient, private store: Store) { super(); }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  //buscarAvaliacao(
  //  codigo: number
  //): Observable<any> {
  //  const url = `${this.UrlService}/RelatorioAvaliacao/BuscarRelatorioAvaliacao/${codigo}`;
  //  return this.http.get<any>(url, this.httpOptions);
  //}

  obterTarefas$: Observable<Task[]> = this.http.get<Task[]>(this.UrlService + "tarefa/getall", this.httpOptions)
    .pipe(tap(next => this.store.set('todolist', next )));

  obterTarefa(id: number): Observable<Task> {
    return this.http.get<Task>(this.UrlService + "tarefa/" + id, this.httpOptions);

  }

  excluirTarefa() { }
  salvarTarefa() { }
}
