import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
