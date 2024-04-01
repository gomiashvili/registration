import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { CompliteAccount1Component } from './components/complite-account1/complite-account1.component';

const routes: Routes = [
  { path: '', component: JoinUsComponent },
  { path: 'register-account', component: RegisterAccountComponent },
  { path: 'complite-account-step-1', component: CompliteAccount1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
