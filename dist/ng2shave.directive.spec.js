var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ShaveDirective } from "./ng2shave.directive";
import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from "@angular/core";
import { By } from "@angular/platform-browser";
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
describe('ShaveDirective', function () {
    var fixture;
    var directiveElement;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ShaveDirective],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });
    afterEach(function () { fixture = null; });
    it('should set the height to the default height - 100px', async(function () {
        var tpl = "<div ng2shave>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>";
        fixture = createTestComponent(tpl);
        fixture.detectChanges();
        directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
        expect(directiveElement.nativeElement.offsetHeight).toBeLessThan(100);
    }));
    it('should set the height to the defined height', async(function () {
        var tpl = "<div ng2shave [shaveHeight]=\"50\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>";
        fixture = createTestComponent(tpl);
        fixture.detectChanges();
        directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
        expect(directiveElement.nativeElement.offsetHeight).toBeLessThan(50);
    }));
    it('should set the custom class on the hidden span element', async(function () {
        var tpl = "<div [shave]=\"{ classname: 'my-shave' }\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>";
        fixture = createTestComponent(tpl);
        fixture.detectChanges();
        directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
        expect(getDOM().querySelector(directiveElement.nativeElement, '.my-shave')).toBeDefined();
    }));
    it('should set the custom charachter instead the default ...', async(function () {
        var tpl = "<div [ng2shave]=\"{ character: '\u2701' }\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>";
        fixture = createTestComponent(tpl);
        fixture.detectChanges();
        directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
        expect(getDOM().querySelector(directiveElement.nativeElement, '.js-shave-char')).toBeDefined();
    }));
});
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        Component({ selector: 'test-cmp', template: '' }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
function createTestComponent(template) {
    return TestBed.overrideComponent(TestComponent, { set: { template: template } })
        .createComponent(TestComponent);
}
//# sourceMappingURL=ng2shave.directive.spec.js.map