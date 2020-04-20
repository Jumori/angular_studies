import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockPitComponent } from './cock-pit/cock-pit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockPitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
