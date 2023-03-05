import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortsComponent } from './components/shorts/shorts.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', component: CardsComponent},
  { path: 'video/:id', component: VideoComponent},
  { path: 'shorts', component: ShortsComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
