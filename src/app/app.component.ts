import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-and-series';
  closed: boolean = false;

  toggleMenu() {
    console.log()
    this.closed = !this.closed  
  }
} 
