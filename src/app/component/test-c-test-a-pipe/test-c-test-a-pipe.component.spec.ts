import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCTestAPipeComponent } from './test-c-test-a-pipe.component';

describe('TestCTestAPipeComponent', () => {
  let component: TestCTestAPipeComponent;
  let fixture: ComponentFixture<TestCTestAPipeComponent>;

  let pipe: TestCTestAPipeComponent;
  // NOTE:
  // if your pipe uses dependencies then you might want to use
  // the Angular Test Bed (not covered in this example)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCTestAPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCTestAPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    pipe = new TestCTestAPipeComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Just need to test passing inputs and outputs

  it('providing no value returns fallback', () =>{
      expect(pipe.transform('', 'http://place-hold.it/300'))
        .toBe('http://place-hold.it/300')
  });
});
