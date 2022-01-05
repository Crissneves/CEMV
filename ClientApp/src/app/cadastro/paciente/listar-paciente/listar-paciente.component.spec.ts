/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListarPacienteComponent } from './listar-paciente.component';

let component: ListarPacienteComponent;
let fixture: ComponentFixture<ListarPacienteComponent>;

describe('listar-paciente component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListarPacienteComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListarPacienteComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});