import { Employee } from '../domain/employee';
import { EmployeeRepository } from '../domain/employee.repository';

export class GetEmployeesUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
