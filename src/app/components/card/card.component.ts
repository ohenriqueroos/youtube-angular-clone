import { CardsService } from './../../shared/cards.service';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from './Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: Card[] = [];
  newCard: Card = {
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    title: "HTML, CSS and JavaScript Course - 01",
    nameChannel: "Channel",
    imageChannel: "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    views: "100 mil",
    days: "1 dia"
  }

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.cards
    this.cardsService.addNewCard(this.newCard)
  }

}
