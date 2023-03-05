import { CardsService } from './../../shared/cards.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/shared/toggle-menu.service';
import { Card } from '../card/Card';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  menuStatus!: Observable<boolean>
  video: any;

  constructor(private toggleMenuService: ToggleMenuService, private cardsService: CardsService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
    this.cardsService.getVideos().subscribe(videos => {
      this.video = videos as Card[]
      console.log(this.video)
    })
  }
}
