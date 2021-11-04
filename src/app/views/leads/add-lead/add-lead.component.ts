import { TableComponent } from './../table/table.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeadserviceService } from './../leadservice.service';


@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css'],
  providers: [TableComponent]
})
export class AddLeadComponent implements OnInit {

  [x: string]: any;

  formLead: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar, public leadService:LeadserviceService) {
    this.formLead = this.formBuilder.group({
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email:['', Validators.required],   
      opportunities: ['', Validators.required],
   })
  
  }

  mensagens = {
    name: [{tipo:'required', mensagem: 'O campo Nome é obrigatório!'}],

    telephone: [{tipo:'required', mensagem:'O campo Telefone é obrigatório!'}],
    
    email: [{tipo:'required', mensagem:'O campo E-mail é obrigatório!'}],
                }


  ngOnInit(): void { 
  }



  title = 'toolsets';
  parentSelector: boolean = false;
  oportunidades = [
    { id: 1, select: false, name: 'RPA' },
    { id: 2, select: false, name: 'Produto Digital' },
    { id: 3, select: false, name: 'Analytics' },
    { id: 4, select: false, name: 'BPM' },
  ];


  opportunityCheck($event: any): void {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.oportunidades = this.oportunidades.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }

      return d;
    });
  }


selectedValues: any = []
accessSelectedOptions(): void {
 this.selectedValues.push (this.oportunidades
            .filter(opp => opp.select)
            .map(opp => opp.name));
          this.formLead.patchValue({
              opportunities: this.selectedValues.join(", ")
})
}

checkLeadValidation(): void{
  this.accessSelectedOptions()
  this.selectedValues = []
  if(this.formLead.valid==true){
    this.addLeadStorage();
    this.sendPotential();
    this.router.navigate (['/leads'])
    this.snackBar.open('Lead inserido com sucesso!','x',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:'top',
    });
  }
    else {
      this.snackBar.open('Todos os campos devem ser preenchidos.','x',{
        duration: 3000,
        horizontalPosition:"right",
        verticalPosition:'top',
      })
    }

  }

addLeadStorage(): void{
  let leadData:any = Object.values(this.formLead.value);
  let leadName = leadData.splice(0,1);
  window.localStorage.setItem(leadName.toString(), leadData.toString())
  }


 newPotential:any = {}
  sendPotential() {
  this.newPotential ={name: this.formLead.get('name')!.value, category: this.formLead.get('opportunities')!.value};
  this.getArray;
  this.leadService.sharedPotentials.push(this.newPotential);
  console.log(this.newPotential,this.leadService.sharedPotentials);

  }


  get getArray():any {
    return this.leadService.sharedPotentials;
  }

}
