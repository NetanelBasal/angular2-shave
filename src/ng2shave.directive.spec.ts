import { ShaveDirective } from "./ng2shave.directive";
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from "@angular/core";
import { By } from "@angular/platform-browser";
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

describe('ShaveDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ShaveDirective],
      schemas: [NO_ERRORS_SCHEMA]
    })
  });

   afterEach(() => { fixture = null; });

  it('should set the height to the default height - 100px', async(() => {
    const tpl = `<div ng2shave>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>`;
    fixture = createTestComponent(tpl);
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
    expect(directiveElement.nativeElement.offsetHeight).toBeLessThan(100);
  }));

  it('should set the height to the defined height', async(() => {
    const tpl = `<div ng2shave [shaveHeight]="50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>`;
    fixture = createTestComponent(tpl);
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
    expect(directiveElement.nativeElement.offsetHeight).toBeLessThan(50);
  }));

  it('should set the custom class on the hidden span element', async(() => {
    const tpl = `<div [shave]="{ classname: 'my-shave' }">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>`;
    fixture = createTestComponent(tpl);
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
    expect(getDOM().querySelector(directiveElement.nativeElement, '.my-shave')).toBeDefined();
  }));

  it('should set the custom charachter instead the default ...', async(() => {
    const tpl = `<div [ng2shave]="{ character: '✁' }">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur deserunt dolore dolores ea esse expedita, recusandae sint totam velit. Beatae deserunt expedita, laborum nobis placeat quibusdam recusandae similique sit!</div>`;
    fixture = createTestComponent(tpl);
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(ShaveDirective));
    expect(getDOM().querySelector(directiveElement.nativeElement, '.js-shave-char')).toBeDefined();
  }));

});



@Component({selector: 'test-cmp', template: ''})
class TestComponent {}
 
function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}
