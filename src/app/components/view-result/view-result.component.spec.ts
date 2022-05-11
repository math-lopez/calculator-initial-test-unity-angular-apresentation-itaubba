import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultComponent } from './view-result.component';

describe('ViewResultComponent', () => {
  let component: ViewResultComponent;
  let fixture: ComponentFixture<ViewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${ViewResultComponent.prototype.increment.name}
  should increment value`, (done) => {
    for(let i = 0; i < 5; i++){
      component.increment();
    }
    component.numberResult$.subscribe(s => {
      expect(s).toBe(5);
      done()
    });
  });

  it(`#${ViewResultComponent.prototype.increment.name}
  should decrement value`, (done) => {
    component.decrement();
    component.numberResult$.subscribe(s => {
      expect(s).toBe(0);
      done()
    });
  });

});
