import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/employees').subscribe((data: any[]) => {
      this.employees = data;
    });
  }
}
