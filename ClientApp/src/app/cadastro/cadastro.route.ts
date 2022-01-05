import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoComponent } from "./todo/todo/todo.component";

const cadastroRoutingConfig: Routes = [
  //{ path: '', component: ListarCorComponent, pathMatch: 'full' },
  {
    path: 'cor', loadChildren: () => import("./cor/cor.module").then(m => m.CorModule)
  },
  { path: 'listatarefas', component: TodoComponent}
  //{ path: 'cor/cadastrarcor', component: CadastrarCorComponent }
]
@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(cadastroRoutingConfig)],
  exports: [RouterModule ]
})

export class CadastroRoutingModule { }
