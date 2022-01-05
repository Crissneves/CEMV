import { Component, Input } from '@angular/core';
import { Task } from '../../../_models/task';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
/** todo component*/
export class TodoComponent {
  /** todo ctor */

  @Input() list: Task[];
    constructor() {

    }
}
