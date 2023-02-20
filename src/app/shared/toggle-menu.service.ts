import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  hidden: boolean = true;
  private menuToggle$ = new BehaviorSubject<boolean>(false);
  menuSelected$ = this.menuToggle$.asObservable();
  
  constructor() {}

  toggleMenu() {
    this.menuSelected$.subscribe(value => this.hidden = !value)
    this.menuToggle$.next(this.hidden)
    if(this.hidden === true) {
      console.log('É true')
    } else {
      console.log('É false')
    }
  }
}
