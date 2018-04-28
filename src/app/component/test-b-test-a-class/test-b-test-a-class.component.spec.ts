import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBTestAClassComponent } from './test-b-test-a-class.component';

// NOTE:
// this is the test suite function that holds all
// of our test specs
describe('TestBTestAClassComponent', () => {
  let component: TestBTestAClassComponent;
  let fixture: ComponentFixture<TestBTestAClassComponent>;

  let servicey: TestBTestAClassComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBTestAClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBTestAClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // NOTE:
  // before it's ran we create a new instance of TestBTestAClassComponent
  // and store it on the service variable
  beforeEach(() => {
    servicey = new TestBTestAClassComponent();
  });

  afterEach(() => {
    servicey = null;
    localStorage.removeItem('token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => {
    // set the token in local storage
    localStorage.setItem('token', '1234');
    expect(servicey.isAuthenticated()).toBeTruthy();
  });

  // NOTE:
  // the afterEach will run prior to this spec which will
  // clean the environment
  it('should return false from isAuthenicated when there is no token', () => {
    expect(servicey.isAuthenticated()).toBeFalsy();
  });


});
