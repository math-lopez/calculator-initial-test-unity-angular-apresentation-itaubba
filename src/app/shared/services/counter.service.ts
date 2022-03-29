import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private defaultNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private valueReult$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  public setdefaultNumber(number: number){
    this.defaultNumber$.next(number);
  }

  public getdefaultNumber(){
    return this.defaultNumber$;
  }

  public increment(){
    let numberResult = this.valueReult$.value + this.defaultNumber$.value;
    this.valueReult$.next(numberResult);
  }

  public decrement(){
    let numberResult = this.valueReult$.value - this.defaultNumber$.value;
    if(numberResult < 0){
      this.valueReult$.next(0);
    } else {
      this.valueReult$.next(numberResult);
    }
  }

  public getValueResult(){
    return this.valueReult$.asObservable();
  }
}
