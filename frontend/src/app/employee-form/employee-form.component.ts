import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      active: [true, Validators.required],
      photo: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      hireDate: ['', Validators.required],
      cpf: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        zip: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      })
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.http.post('/api/employees', this.employeeForm.value).subscribe(response => {
        console.log('Employee created:', response);
      });
    }
  }
}
