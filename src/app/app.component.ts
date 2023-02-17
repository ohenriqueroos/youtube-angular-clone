import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() sidebar: boolean = false;
  title = 'movies-and-series';

  openSidebar() {
    this.sidebar = !this.sidebar;
  }
}
