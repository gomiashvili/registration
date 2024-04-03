import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompliteAccount1Component } from './components/complite-account1/complite-account1.component';
import { StepsComponent } from './components/steps/steps.component';
import { CompliteAccount2Component } from './components/complite-account2/complite-account2.component';
import { SecuredComponent } from './components/secured/secured.component';
import { LoginComponent } from './components/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    JoinUsComponent,
    LeftSidebarComponent,
    RegisterAccountComponent,
    CompliteAccount1Component,
    StepsComponent,
    CompliteAccount2Component,
    SecuredComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
