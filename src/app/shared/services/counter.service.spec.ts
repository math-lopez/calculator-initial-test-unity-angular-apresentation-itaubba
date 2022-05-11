import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it(`${CounterService.prototype.decrement.name}
  // should decrement value default (1)`, (done) => {
  //   var valueDefault = service.getdefaultNumber().value;
  //   service.decrement();
  //   service.getValueResult().subscribe(n => {
  //     expect(n).toBe(0);
  //     done();
  //   });
  // });

  it(`${CounterService.prototype.decrement.name}
  should decrement 3 out of 5 leaving 2 `, (done) => {
    for(let i = 0; i < 5; i++){
      service.increment();
    }
    service.setdefaultNumber(3);
    service.decrement();
    service.getValueResult().subscribe(n => {
      expect(n).toBe(2);
      done();
    });
  });

  it(`${CounterService.prototype.getdefaultNumber.name}
  should show default value setting`, () => {
    let defaultValue = service.getdefaultNumber();
    expect(defaultValue.value).toBe(1);
    service.setdefaultNumber(5);
    expect(defaultValue.value).toBe(5);
  });


});
