import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  id:number;
  employee:Employee = new Employee()

  constructor(private _activatedRoute: ActivatedRoute, private _empService:EmployeeService, private _router:Location) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._empService.getEmpById(this.id).subscribe(data=> {
      this.employee=data;
    },
    error => console.log(error)
    );
  }
  goBack(){
    this._router.back()
  }

}
