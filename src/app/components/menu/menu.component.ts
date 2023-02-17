import { ToggleMenuService } from './../../shared/toggle-menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hidden!: Observable<boolean>;


  constructor(private ToggleMenuService: ToggleMenuService) {

  }

  ngOnInit(): void {
    this.hidden = this.ToggleMenuService.menuSelected$
  }
}
