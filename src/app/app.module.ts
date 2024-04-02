import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './src/app/core/navbar/navbar.component';
import { FooterComponent } from './src/app/core/footer/footer.component';
import { HomepageComponent } from './src/app/features/homepage/homepage.component';
import { BadgeListComponent } from './src/app/features/badge/badge-list/badge-list.component';
import { BadgeInsertComponent } from './src/app/features/badge/badge-insert/badge-insert.component';
import {FormsModule} from "@angular/forms";
import { BadgeShowComponent } from './src/app/features/badge/badge-show/badge-show.component';
import { BadgeEditComponent } from './src/app/features/badge/badge-edit/badge-edit.component';
import { BadgeDeleteComponent } from './src/app/features/badge/badge-delete/badge-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { EliminaBadgeModalComponent } from './src/app/features/badge/elimina-badge-modal/elimina-badge-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BadgePreferitiComponent } from './src/app/features/badge/badge-preferiti/badge-preferiti.component';
import { RicercaBadgeComponent } from './src/app/features/badge/ricerca-badge/ricerca-badge.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    BadgeListComponent,
    BadgeInsertComponent,
    BadgeShowComponent,
    BadgeEditComponent,
    BadgeDeleteComponent,
    EliminaBadgeModalComponent,
    BadgePreferitiComponent,
    RicercaBadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
