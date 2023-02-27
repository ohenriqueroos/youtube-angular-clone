import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/shared/toggle-menu.service';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss']
})
export class ShortsComponent implements OnInit {
  menuStatus!: Observable<boolean>;

  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
  }

}
