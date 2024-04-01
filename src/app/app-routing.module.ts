import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';

const routes: Routes = [
  { path: '', component: JoinUsComponent },
  { path: 'register-account', component: RegisterAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
