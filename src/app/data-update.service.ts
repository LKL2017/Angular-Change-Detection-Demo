import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUpdateService {
  private updateSubject$ = new Subject<boolean>();
  updateObservable = this.updateSubject$.asObservable();

  constructor() { }

  setData(v: boolean) {
    this.updateSubject$.next(v);
  }
}
