import { Model } from 'mongoose';
import { EmployeeRepository } from '../../application/domain/employee.repository';
import { Employee } from '../../application/domain/employee.entity';

export class MongoEmployeeRepository implements EmployeeRepository {
  constructor(private readonly model: Model<Employee>) {}
  /**
   * Creates a new employee in the database.
   *
   * @param {Employee} employee - The employee object to be created.
   * @return {Promise<Employee>} A promise that resolves to the created employee.
   */
  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new this.model(employee);
    return await createdEmployee.save();
  }

  /**
   * Asynchronously retrieves all employees from the database.
   *
   * @return {Promise<Employee[]>} A promise that resolves to an array of Employee objects.
   */
  async findAll(): Promise<Employee[]> {
    return await this.model.find();
  }
}
