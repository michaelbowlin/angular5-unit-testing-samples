import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Jasmine Test Spec
import { TestAHelloWorldComponent } from './test-a-hello-world.component';

// NOTES:
// Describes a "Test Suite"
// - A collection of individual test specs

describe('TestAHelloWorldComponent', () => {
  let component: TestAHelloWorldComponent;
  let fixture: ComponentFixture<TestAHelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAHelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // NOTES:
  // Defines an individual test spec
  it('says hello', () => {
    // NOTES:
    // contains one or more EXPECTIONS
    expect(component.helloWorld())
      // NOTES:
      // called a MATCHER expression (boolean)
      .toEqual('Hello World');
  });


});
