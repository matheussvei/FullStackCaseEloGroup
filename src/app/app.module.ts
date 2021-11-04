import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { LeadsComponent } from './views/leads/leads.component';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TableComponent } from './views/leads/table/table.component';
import { AddLeadComponent } from './views/leads/add-lead/add-lead.component';
import { LeadserviceService } from './views/leads/leadservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    LeadsComponent,
    TableComponent,
    AddLeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatSnackBarModule,
  ],
  providers: [LeadserviceService, AddLeadComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
