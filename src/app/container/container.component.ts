import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit,AfterContentInit{

  @ContentChild(EmployeeComponent) employee !:EmployeeComponent;
  
  constructor(){}
  ngOnInit():void{

  }
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName="James";
  }
}
