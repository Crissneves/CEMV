import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TaskIniciadaComponent } from './task-iniciada.component';

let component: TaskIniciadaComponent;
let fixture: ComponentFixture<TaskIniciadaComponent>;

describe('task-iniciada component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskIniciadaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TaskIniciadaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
