import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  numberResult$: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.numberResult$ = this.counterService.getValueResult();
  }

  decrement(){
    this.counterService.decrement();
  }

  increment(){
    this.counterService.increment();
  }
}
