
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TopoComponent } from './topo.component';

let component: TopoComponent;
let fixture: ComponentFixture<TopoComponent>;

describe('topo component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TopoComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TopoComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
