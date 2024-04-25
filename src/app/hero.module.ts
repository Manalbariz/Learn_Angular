import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailsComponent} from "./hero-details/hero-details.component";
import {MessagesComponent} from "./messages/messages.component";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  exports: [
    HeroesComponent,
    MessagesComponent
  ]
})
export class HeroModule { }
