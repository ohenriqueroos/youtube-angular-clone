import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bntMenu: any = document.querySelector('.open-menu')

  constructor(toggleMenuService: ToggleMenuService) { 
    this.bntMenu = toggleMenuService.toggleMenu();
  }

  ngOnInit(): void {
  }
}
