import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  @Input() sidebar: any = document.querySelector('.sidebar');
  @Input() shortSidebar: any = document.querySelector('.short-sidebar')

  constructor() { }
  toggleMenu() {
    console.log(this.sidebar);
    console.log(this.shortSidebar);
    if(this.sidebar.classList.contains('hidden')) {
      this.sidebar.classList.remove('hidden')
      this.sidebar.classList.add('hidden')
    }
    if(this.shortSidebar.classList.contains('hidden')) {
      this.sidebar.classList.add('hidden')
      this.sidebar.classList.remove('hidden')
    }
  }
}
