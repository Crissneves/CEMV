import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CorService } from '../../../services/cor.service';
import { Cor } from '../../../_models/cor';

@Component({
    selector: 'app-cadastrar-cor',
    templateUrl: './cadastrar-cor.component.html',
    styleUrls: ['./cadastrar-cor.component.css']
})
/** cadastrar-cor component*/
export class CadastrarCorComponent implements OnInit {
  /** cadastrar-cor ctor */

  cadastrarForm: FormGroup;
  cor: Cor;
  corId: number;
  descricao: string;
  error = { erro: false, erroMensagem: environment.campoObrigatorio };


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private corService: CorService) {

  }
  ngOnInit() {

    this.cadastrarForm = this.fb.group({
      descricao: ['', Validators.required]
    }
    );
    this.error.erro = false;

    this.activatedRouter.params.subscribe(param => {
      
      this.montarEdicao(param.id);
    });
  }

  back() {
    this.router.navigate(['/cadastro/cor']);
  }

  Salvar(formValue) {
    this.error.erro = this.cadastrarForm.invalid;

    if (this.cadastrarForm.invalid) {
      return;
    }
    //CodOrg: this.codOrg ? this.codOrg : this.codigoOrgao,
    //const cor: Cor = {
    //  CorId: this.corId,
    //  Descricao: this.descricao
    //};
    this.cor = Object.assign({}, this.cor, this.cadastrarForm);

  }

  montarEdicao(id) {
  
    // this.cor = this.corService.obterCor(id);
  }
}
