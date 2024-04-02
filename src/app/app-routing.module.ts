import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./src/app/features/homepage/homepage.component";
import {BadgeListComponent} from "./src/app/features/badge/badge-list/badge-list.component";
import {BadgeInsertComponent} from "./src/app/features/badge/badge-insert/badge-insert.component";
import {BadgeShowComponent} from "./src/app/features/badge/badge-show/badge-show.component";
import {BadgeEditComponent} from "./src/app/features/badge/badge-edit/badge-edit.component";
import {BadgeDeleteComponent} from "./src/app/features/badge/badge-delete/badge-delete.component";
import {BadgePreferitiComponent} from "./src/app/features/badge/badge-preferiti/badge-preferiti.component";
import {RicercaBadgeComponent} from "./src/app/features/badge/ricerca-badge/ricerca-badge.component";

const routes: Routes = [
  { path: 'badge/search', component: RicercaBadgeComponent },
  { path: 'badge/favorites', component: BadgePreferitiComponent },
  { path: 'badge/delete/:id', component: BadgeDeleteComponent },
  { path: 'badge/edit/:id', component: BadgeEditComponent },
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
