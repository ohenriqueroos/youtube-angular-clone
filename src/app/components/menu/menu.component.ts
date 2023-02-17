import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() hidden!: boolean;


  constructor(ToggleMenuService: ToggleMenuService) {

   }

  ngOnInit(): void {
  }
}
