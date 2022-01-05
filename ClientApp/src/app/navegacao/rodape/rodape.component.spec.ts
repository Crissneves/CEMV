import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { RodapeComponent } from './rodape.component';

let component: RodapeComponent;
let fixture: ComponentFixture<RodapeComponent>;

describe('rodape component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RodapeComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(RodapeComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
