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

  // cards: Card[] = [
  //   { 
  //     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  //     title: "Day in the life of a Software Engineer",
  //     nameChannel: "Nome do Canal",
  //     imageChannel: "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     views: "50 mil",
  //     days: "10 dias"
  //   },
  //   { 
  //     image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
  //     title: "How not to be a programmer",
  //     nameChannel: "Channel",
  //     imageChannel: "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     views: "100 mil",
  //     days: "1 dia"
  //   },
  //   { 
  //     image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  //     title: "Day in the life of a Software Engineer",
  //     nameChannel: "Nome do Canal",
  //     imageChannel: "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     views: "50 mil",
  //     days: "10 dias"
  //   },
  //   { 
  //     image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
  //     title: "How to be a programmer",
  //     nameChannel: "Channel",
  //     imageChannel: "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     views: "100 mil",
  //     days: "1 dia"
  //   },
  // ];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cards = this.cardsService.cards
  }

}
