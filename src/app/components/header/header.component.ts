import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<any>();
  constructor(toggleMenuService: ToggleMenuService) { 
  }

  toggleSidemenu() {
    this.toggle.emit(true);
  }

  ngOnInit(): void {
  }
}
