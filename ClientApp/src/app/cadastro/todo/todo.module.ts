import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { TaskFinalizadaComponent } from './task-finalizada/task-finalizada.component';
import { TaskIniciadaComponent } from './task-iniciada/task-iniciada.component';
import { TaskComponent } from './task/task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Store } from './todo.store';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [TodoComponent, TaskComponent, TaskIniciadaComponent, TaskFinalizadaComponent, ToDoListComponent],
  imports: [CommonModule  ],
  providers: [TarefaService, Store]
},
  )
export class TodoModule {


}
