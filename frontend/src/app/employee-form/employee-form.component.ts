import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      hireDate: ['', Validators.required],
      active: [true],
      photo: [''],
      address: this.fb.group({
        street: [''],
        zip: [''],
        neighborhood: [''],
        city: [''],
        state: ['']
      })
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
