import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from 'src/app/shared/services/counter.service';

import { InsertNumberCountComponent } from './insert-number-count.component';

describe('InsertNumberCountComponent', () => {
  let component: InsertNumberCountComponent;
  let fixture: ComponentFixture<InsertNumberCountComponent>;
  let counterService: CounterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNumberCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNumberCountComponent);
    component = fixture.componentInstance;
    counterService = fixture.debugElement.injector.get(CounterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${InsertNumberCountComponent.prototype.setNumberIncrementOrDecrement.name}
  should set new number increment / decrement`, (done) => {
    let counter = 5;
    component.valueInput = counter;
    component.setNumberIncrementOrDecrement();
    component.numberTest$.subscribe(q => {
      expect(q).toBe(counter);
      done();
    });
  });

  it(`(D) Should set new number increment / decrement`, () => {
    spyOn(component, 'setNumberIncrementOrDecrement');
    fixture.detectChanges();
    const btnSetNumber: HTMLElement = fixture.nativeElement.querySelector('#btn-setnumber')
    btnSetNumber.click();
    expect(component.setNumberIncrementOrDecrement).toHaveBeenCalled()
  });

});
