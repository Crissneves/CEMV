import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule,    
    FormsModule,
    ReactiveFormsModule, 
    RouterModule ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [GridComponent]
})
export class ComponentModule {
  
}
