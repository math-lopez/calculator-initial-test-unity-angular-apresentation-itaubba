import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';

describe('ActionDirective', () => {
  let fixture: ComponentFixture<ActionDirective>;
  let component: ActionDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirective],
      imports: [ActionDirectiveModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirective);
    component = fixture.componentInstance;
  });
});
