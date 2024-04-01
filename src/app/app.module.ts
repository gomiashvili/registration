import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompliteAccount1Component } from './components/complite-account1/complite-account1.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinUsComponent,
    LeftSidebarComponent,
    RegisterAccountComponent,
    CompliteAccount1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
