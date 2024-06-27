import { Model } from 'mongoose';
import { EmployeeRepository } from '../../application/abstractions/employee.repository';
import { Employee } from '../../domain/employee.entity';
import EmployeeModel from '../models/employee.model';

export class MongoEmployeeRepository implements EmployeeRepository {
  constructor(private readonly model: typeof EmployeeModel) { }
  /**
   * Creates a new employee in the database.
   *
   * @param {Employee} employee - The employee object to be created.
   * @return {Promise<Employee>} A promise that resolves to the created employee.
   */
  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new this.model({
      active: employee.active,
      photo: employee.photo,
      name: employee.name,
      email: employee.email,
      hireDate: employee.hireDate,
      cpf: employee.cpf.cpf,
      address: {
        street: employee.address.street,
        zip: employee.address.zip,
        neighborhood: employee.address.neighborhood,
        city: employee.address.city,
        state: employee.address.state,
      },
    });
    return await createdEmployee.save();
  }

  /**
   * Asynchronously retrieves all employees from the database.
   *
   * @return {Promise<Employee[]>} A promise that resolves to an array of Employee objects.
   */
  async findAll(): Promise<Employee[]> {
    const employees = await this.model.find();
    return employees.map((employee) => new Employee(
      employee.active,
      employee.name,
      employee.photo,
      employee.email,
      employee.hireDate,
      employee.cpf,
      employee.address
    ));
  }
}
