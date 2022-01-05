"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var topo_component_1 = require("./topo.component");
var component;
var fixture;
describe('topo component', function () {
    beforeEach((0, testing_1.async)(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [topo_component_1.TopoComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(topo_component_1.TopoComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', (0, testing_1.async)(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=topo.component.spec.js.map