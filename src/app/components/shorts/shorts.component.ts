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
  shorts: { imageChannel: string, nameChannel: string, subtitle: string, likes: string, comments: string}[] = [
    {
      "imageChannel": "./assets/img/img_channel.svg",
      "nameChannel": "Channel",
      "subtitle": "Aqui vai um exemplo",
      "likes": "7,4 mi",
      "comments": "14 mil"
    }
  ];

  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
  }

}
