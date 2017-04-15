import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { LoadJsonComponent } from './load-json/load-json.component';
import { LoadRssComponent } from './load-rss/load-rss.component';
import { InfiniteScrollingComponent } from './infinite-scrolling/infinite-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadJsonComponent,
    LoadRssComponent,
    InfiniteScrollingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
