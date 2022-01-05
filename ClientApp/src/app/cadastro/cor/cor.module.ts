import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../componentes/component.module';
import { CorService } from '../../services/cor.service';
import { CadastrarCorComponent } from './cadastrar-cor/cadastrar-cor.component';
import { CorRoutingModule } from './cor-rounting/cor-rounting-module';
import { ListarCorComponent } from './listar-cor/listar-cor.component';


@NgModule({
  declarations: [CadastrarCorComponent, ListarCorComponent],
  imports: [CommonModule,
    CorRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    ComponentModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  exports: [ListarCorComponent, CadastrarCorComponent],
  providers:[CorService]
})
export class CorModule {
  
}
