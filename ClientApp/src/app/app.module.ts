import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './navegacao/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TopoComponent } from './navegacao/topo/topo.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AppRoutingModule } from './app.routes';
import { CadastroModule } from './cadastro/cadastro.module';
import { TodoModule } from './cadastro/todo/todo.module';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    CounterComponent,
    FetchDataComponent,   
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
    AppRoutingModule,   
    CadastroModule,
    TodoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
