import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListarCorComponent } from './listar-cor.component';

let component: ListarCorComponent;
let fixture: ComponentFixture<ListarCorComponent>;

describe('listar-cor component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListarCorComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListarCorComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
