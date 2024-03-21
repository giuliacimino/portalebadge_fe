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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    BadgeListComponent,
    BadgeInsertComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
