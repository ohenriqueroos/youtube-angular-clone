import { CardsService } from './../../shared/cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from './Card';

import * as uuid from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  videos: any;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    // this.cards = this.cardsService.cards
    // this.cardsService.addNewCard(this.newCard)
    this.cardsService.getVideos().subscribe(videos => {
      this.videos = videos as Card[]
      videos.forEach(element => {
        const id = uuid.v4().toString();
        element.id = id
        console.log(element)
      });      
    })
  }
}