import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/shared/toggle-menu.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  menuStatus!: Observable<boolean>
  suggestions: {title: string}[] = [
    {"title": "Programação"},
    {"title": "Ao vivo"},
    {"title": "Vlogs"},
    {"title": "Jogos"},
    {"title": "Enviados recentemente"},
    {"title": "Música"},
    {"title": "Angular"},
    {"title": "React"},
  ]
  
  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
  }

 }
