import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private searchSubject = new Subject<any>();

  performSearch(data: any) {
    this.searchSubject.next(data);
  }

  getSearchObservable() {
    return this.searchSubject.asObservable();
  }
  constructor() { }
}
