import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { LeadserviceService } from '../leadservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  potentials:any = [];

  confirmeds:any = [];

  scheduleds:any = [];


  onDrop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  get getPotentials(): any {
    return this.leadService.sharedPotentials;
  }

  addNewPotential(){
    this.getPotentials;
    this.potentials = this.leadService.sharedPotentials;
    console.log(this.potentials)
  }

  

  constructor( public leadService: LeadserviceService) { }

  ngOnInit(): void {
    this.addNewPotential() 
  }
  

}