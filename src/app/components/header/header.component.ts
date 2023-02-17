import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private toggleMenuService: ToggleMenuService) { 
  }

  toggleSidemenu() {
    this.toggleMenuService.toggleMenu()
  }

  ngOnInit(): void {
  }
}
