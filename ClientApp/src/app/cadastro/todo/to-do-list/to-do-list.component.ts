import { Component, Input } from '@angular/core';
import { Task } from '../../../_models/task';

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})
/** to-do-list component*/
export class ToDoListComponent {

    @Input() list: Task[];

    /** to-do-list ctor */
    constructor() {

    }
}
