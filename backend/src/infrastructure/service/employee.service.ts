import { Employee } from '../../application/domain/employee';
import { EmployeeRepository } from '../../application/domain/employee.repository';

export class EmployeeService {
  constructor(private employeeRepo: EmployeeRepository) {}

  async createEmployee(employee: Employee): Promise<Employee> {
    return this.employeeRepo.create(employee);
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeeRepo.findAll();
  }
}
