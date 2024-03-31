import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { LeftImageComponent } from './components/left-image/left-image.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinUsComponent,
    LeftImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
