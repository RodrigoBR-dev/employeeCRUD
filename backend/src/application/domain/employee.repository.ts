import { Employee } from './employee.entity';

export interface EmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
