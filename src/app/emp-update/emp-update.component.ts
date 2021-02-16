import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.scss']
})
export class EmpUpdateComponent implements OnInit {
  id: number;
  employee: Employee = new Employee()

  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id']
    this._employeeService.getEmpById(this.id).subscribe(data => {
      this.employee = data
    },
      error => console.log(error)
    );
  }
  gotoEmpList() {
    this._router.navigate(['/employees'])
  }
  onSubmit() {
    this._employeeService.updateEmp(this.id, this.employee).subscribe(data => {
      this.gotoEmpList()
    },
    error=> console.log(error)
    )
  }

}
