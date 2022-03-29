import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNumberCountComponent } from './insert-number-count.component';

describe('InsertNumberCountComponent', () => {
  let component: InsertNumberCountComponent;
  let fixture: ComponentFixture<InsertNumberCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNumberCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNumberCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
