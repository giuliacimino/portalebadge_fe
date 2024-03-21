import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./src/app/features/homepage/homepage.component";
import {BadgeListComponent} from "./src/app/features/badge/badge-list/badge-list.component";
import {BadgeInsertComponent} from "./src/app/features/badge/badge-insert/badge-insert.component";
import {BadgeShowComponent} from "./src/app/features/badge/badge-show/badge-show.component";

const routes: Routes = [
  { path: 'badge/show/:id', component: BadgeShowComponent },
  { path: 'badge/insert', component: BadgeInsertComponent },
  { path: 'badge/list', component: BadgeListComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
