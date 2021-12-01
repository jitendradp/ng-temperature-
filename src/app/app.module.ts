import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { RenderTableComponent } from './render-table/render-table.component';
import { RenderColumnComponent } from './render-column/render-column.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorMsgComponent,
    RenderTableComponent,
    RenderColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
