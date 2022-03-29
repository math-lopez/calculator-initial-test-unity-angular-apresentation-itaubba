import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-insert-number-count',
  templateUrl: './insert-number-count.component.html',
  styleUrls: ['./insert-number-count.component.css']
})
export class InsertNumberCountComponent implements OnInit {
  valueInput: number = 1;

  numberTest$: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.getValueNumberIncrementDecrement();
  }

  getValueNumberIncrementDecrement(){
    this.numberTest$ = this.counterService.getdefaultNumber();
  }

  setNumberIncrementOrDecrement(){
    this.counterService.setdefaultNumber(this.valueInput);
  }

}
