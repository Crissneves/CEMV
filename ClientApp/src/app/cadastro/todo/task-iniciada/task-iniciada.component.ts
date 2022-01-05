import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TarefaService } from '../../../services/tarefa.service';
import { Store } from '../todo.store';

@Component({
    selector: 'task-iniciada',
    templateUrl: './task-iniciada.component.html'
})
/** task-iniciada component*/
export class TaskIniciadaComponent implements OnInit, OnDestroy {
  /** task-iniciada ctor */

  iniciados$: Observable<any[]>;

  constructor(private store: Store, private tarefaService: TarefaService) {

  }

  ngOnInit() {
    this.iniciados$ = this.store.getToDoList().pipe(map(todolist => todolist.filter(tarefa => tarefa.iniciado === 'N' && tarefa.finalizado === 'N')));
  }

  ngOnDestroy() {
    
  }
}
