import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";;
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";


const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  {
    path: 'cadastro', loadChildren: () => import("src/app/cadastro/cadastro.module").then(m => m.CadastroModule)
  },
  /* NotFound: Precisa ser a última rota a ser declarada */
  { path: '**', component: NotFoundComponent }
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(rootRouterConfig, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
