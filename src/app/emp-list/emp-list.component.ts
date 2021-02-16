import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees:Employee[];

  constructor(private _empService:EmployeeService , private _router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
    
  }
  private getEmployee(){
    this._empService.getAllEmployee().subscribe(data=>{
      this.employees=data;
    });
  }
  updateEmp(id:number){
    this._router.navigate(['update-employee', id])
  }
  deleteEmp(id:number){
    this._empService.deleteEmp(id).subscribe(data =>{
      this.getEmployee();
    })
  }
  viewEmp(id:number){
    this._router.navigate(['update-details', id])
  }

}
