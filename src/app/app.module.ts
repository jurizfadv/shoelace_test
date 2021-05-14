import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundService } from './shared/background.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsService } from './shared/details.background.service';
import { HttpClientModule } from '@angular/common/http';
import { SlHeaderComponent } from './sl-header/sl-header.component';
import { SlDetailsComponent } from './sl-details/sl-details.component';
import { SlProgressCardComponent } from './sl-progress-card/sl-progress-card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SlHeaderComponent,
    SlProgressCardComponent,
    SlDetailsComponent,
    TableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackgroundService, DetailsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
