import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TarefaService } from '../../../services/tarefa.service';
import { Store } from '../todo.store';

@Component({
    selector: 'task',
    templateUrl: './task.component.html'
})
/** task component*/
export class TaskComponent implements OnInit, OnDestroy {

  toDoList$: Observable<any[]>;
  subscription: Subscription;
  /** task ctor */
  constructor(private tarefaService: TarefaService, private store: Store) {
  }

  ngOnInit() {
    this.toDoList$ = this.store.getToDoList();

    this.subscription = this.tarefaService.obterTarefas$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
