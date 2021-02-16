import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://localhost:8080/api/v1/employees"

  constructor(private _http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.url}`);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    //let httpHeader = new HttpHeaders().set('content-type','application/json')
   // let Headers= {headers: httpHeader}
    return this._http.post<Employee>(`${this.url}`, employee)
  }

  getEmpById(id: number): Observable<Employee> {
    return this._http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmp(id: number, employee: Employee): Observable<Employee> {
    return this._http.put<Employee>(`${this.url}/${id}`, employee);
  }

  deleteEmp(id: number): Observable<Employee> {
    return this._http.delete<Employee>(`${this.url}/${id}`)
  }
}
