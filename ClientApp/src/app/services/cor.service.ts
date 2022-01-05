import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cor } from '../_models/cor';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class CorService extends BaseService {
  constructor(private http: HttpClient) { super(); }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  //buscarAvaliacao(
  //  codigo: number
  //): Observable<any> {
  //  const url = `${this.UrlService}/RelatorioAvaliacao/BuscarRelatorioAvaliacao/${codigo}`;
  //  return this.http.get<any>(url, this.httpOptions);
  //}

  obterCores(): Observable<any> {
    return this.http.get<any>(this.UrlService + "cor/getall", this.httpOptions);
  }

  obterCor(id: number): Observable<Cor> {
    return this.http.get<Cor>(this.UrlService + "cor/" + id, this.httpOptions);
   
  }
  
  excluirCor() { }
  salvarCor() { }
}
