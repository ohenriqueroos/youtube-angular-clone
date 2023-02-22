import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/shared/toggle-menu.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  menuStatus!: Observable<boolean>;
  
  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
  }

 }
