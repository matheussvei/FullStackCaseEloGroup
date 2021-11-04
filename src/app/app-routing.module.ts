import { AddLeadComponent } from './views/leads/add-lead/add-lead.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { LeadsComponent } from './views/leads/leads.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
},
  {
    path: "login",
    component: LoginComponent
},
  {
    path: "leads",
    component: LeadsComponent
  },
  {
    path:"leads/addlead",
    component: AddLeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
