import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() sidebar: any = document.querySelector('.sidebar')
  @Output() shortSidebar: any = document.querySelector('.short-sidebar')

  constructor(ToggleMenuService: ToggleMenuService) {

   }

  ngOnInit(): void {
  }
}
