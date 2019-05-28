import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CountTimerComponent } from './count-timer/count-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    CountTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
