import { Employee } from './employee';

export interface EmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
