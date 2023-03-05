import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Card } from '../components/card/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService implements OnInit {
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
  videos: Card[] = [];

  constructor(private http: HttpClient) {  }

  ngOnInit() { }

  getVideos() {
    const url: string = 'http://localhost:3000/videos'
    return this.http.get<Card[]>(url)
  }

  addNewCard(card: Card) {
    // this.cards.push(card)
  }
}
