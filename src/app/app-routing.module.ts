import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortsComponent } from './components/shorts/shorts.component';

const routes: Routes = [
  { path: '', component: CardsComponent},
  { path: 'shorts', component: ShortsComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
