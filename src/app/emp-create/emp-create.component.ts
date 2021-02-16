import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.scss']
})
export class EmpCreateComponent implements OnInit {
  employee: Employee = new Employee()

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee() {
    this._employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.gotoEmpList()
    },
      error => console.log(error));
  }
  gotoEmpList() {
    this._router.navigate(['/employees'])
  }
  onSubmit() {
    this.saveEmployee();

  }

}
