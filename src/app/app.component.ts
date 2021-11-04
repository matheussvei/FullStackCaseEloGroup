import { TableComponent } from './views/leads/table/table.component';
import { AddLeadComponent } from './views/leads/add-lead/add-lead.component';
import { LeadserviceService } from './views/leads/leadservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' ,
  providers:[LeadserviceService, AddLeadComponent, TableComponent]
})
export class AppComponent {
 
}
