import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CadastroRoutingModule } from './cadastro.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CorModule } from './cor/cor.module';
import { ComponentModule } from '../componentes/component.module';
import { TodoModule } from './todo/todo.module';


@NgModule({
  declarations: [],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CorModule,
    ComponentModule,
    TodoModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CadastroRoutingModule, ComponentModule, TodoModule]
})
export class CadastroModule {
  
}
