"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var rodape_component_1 = require("./rodape.component");
var component;
var fixture;
describe('rodape component', function () {
    beforeEach((0, testing_1.async)(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [rodape_component_1.RodapeComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(rodape_component_1.RodapeComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', (0, testing_1.async)(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=rodape.component.spec.js.map