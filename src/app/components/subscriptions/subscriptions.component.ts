import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleMenuService } from 'src/app/shared/toggle-menu.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  menuStatus!: Observable<boolean>;

  constructor(private toggleMenuService: ToggleMenuService) { }

  ngOnInit() {
    this.menuStatus = this.toggleMenuService.menuSelected$
  }

}
