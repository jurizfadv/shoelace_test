import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlHeaderComponent } from './sl-header/sl-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlProgressCardComponent } from './sl-progress-card/sl-progress-card.component';
import { SlDetailsComponent } from './sl-details/sl-details.component';
import { BackgroundService } from './shared/background.service';
import { DetailsService } from './shared/details.background.service';

@NgModule({
  declarations: [
    AppComponent,
    SlHeaderComponent,
    SlProgressCardComponent,
    SlDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [BackgroundService, DetailsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
