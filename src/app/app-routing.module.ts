import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { CompliteAccount1Component } from './components/complite-account1/complite-account1.component';
import { CompliteAccount2Component } from './components/complite-account2/complite-account2.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'join-us', component: JoinUsComponent },
  { path: '', redirectTo: '/join-us', pathMatch: 'full' },
  { path: 'register-account-step-1', component: RegisterAccountComponent },
  { path: 'complite-account-step-2', component: CompliteAccount1Component },
  { path: 'complite-account-step-3', component: CompliteAccount2Component },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
