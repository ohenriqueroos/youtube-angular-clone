import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';
import { Card } from '../card/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() cards: Card[] = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.cards
  }

}
