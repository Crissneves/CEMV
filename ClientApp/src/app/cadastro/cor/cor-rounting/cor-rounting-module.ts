import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarCorComponent } from "../cadastrar-cor/cadastrar-cor.component";
import { ListarCorComponent } from "../listar-cor/listar-cor.component";

const routes: Routes = [
  { path: 'cor', component: ListarCorComponent },
  { path: 'incluir', component: CadastrarCorComponent },
  { path: 'editar/:id', component: CadastrarCorComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CorRoutingModule { }
