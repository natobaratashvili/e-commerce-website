import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSubject = new BehaviorSubject<string>("");
  filterText$: Observable<string> = this.filterSubject.asObservable();

  setFilter(filterText: string) {
    this.filterSubject.next(filterText);
  }

  constructor() { }
}
