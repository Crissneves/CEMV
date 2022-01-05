import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CorService } from '../../../services/cor.service';
import { Cor } from '../../../_models/cor';

@Component({
  selector: 'app-listar-cor',
  templateUrl: './listar-cor.component.html'
})
/** listar-cor component*/
export class ListarCorComponent implements OnInit {
  /** listar-cor ctor */

  listarForm: FormGroup;

  cores: [Cor];

  constructor(
    private service: CorService,
    private fb: FormBuilder) {

  }
  ngOnInit() {

    this.listarForm = this.fb.group({
      buscarCor: ['']
    });

    this.service.obterCores().subscribe(cores => { this.cores = cores },
      error => console.log(error)
    );
   }

 Buscar() {
   let buscarCor = this.listarForm.value;
}

}

