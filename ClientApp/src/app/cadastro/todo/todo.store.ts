import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../../_models/task";
import { map } from "rxjs/operators";

export interface State
{
  todolist: Task[];
}

const estado: State = { todolist: [] };

//estado =

//{
//  todolist: []
//};

export class Store
{
  private subject = new BehaviorSubject<State>(estado);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: estado
    })
  }

  public getToDoList(): Observable<Task[]> {
    return this.store.pipe(map(store => store.todolist));
  }
}
