/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TaskFinalizadaComponent } from './task-finalizada.component';

let component: TaskFinalizadaComponent;
let fixture: ComponentFixture<TaskFinalizadaComponent>;

describe('task-finalizada component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskFinalizadaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TaskFinalizadaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});