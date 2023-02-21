import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: {image: string, title: string, nameChannel: string, imageChannel: string, views: string, days: string}[] = [
    {"image": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Day in the life of a Software Engineer",
      "nameChannel": "Nome do Canal",
      "imageChannel": "https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "views": "50 mil",
      "days": "10 dias"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
