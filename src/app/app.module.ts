import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ExpirenceComponent } from './views/expirence/expirence.component';
import { AboutMeCardsComponent } from './views/about-me/about-me-cards/about-me-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ExpirenceComponent,
    AboutMeCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    AboutMeCardsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
