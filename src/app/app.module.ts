import { ToggleMenuService } from './shared/toggle-menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { CardsService } from './shared/cards.service';
import { ShortsComponent } from './components/shorts/shorts.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CardsComponent,
    CardComponent,
    ShortsComponent,
    SubscriptionsComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ToggleMenuService, CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
