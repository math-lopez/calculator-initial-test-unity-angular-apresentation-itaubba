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
});
