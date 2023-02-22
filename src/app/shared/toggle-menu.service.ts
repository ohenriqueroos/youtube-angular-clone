import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  hidden!: boolean;
  private menuToggle$ = new BehaviorSubject<boolean>(true);
  menuSelected$ = this.menuToggle$.asObservable();
  
  constructor() {}

  toggleMenu() {
    this.menuSelected$.subscribe(value => this.hidden = !value)
    this.menuToggle$.next(this.hidden)
  }
}
