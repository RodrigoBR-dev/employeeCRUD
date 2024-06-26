import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from '../application/usecases/createEmployee.useCase';
import { GetEmployeesUseCase } from '../application/usecases/getEmployees.useCase';
import { EmployeeDTO } from '../application/types/employee.dto';

export class EmployeeController {
  constructor(
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly getEmployeesUseCase: GetEmployeesUseCase,
  ) { }

  async createEmployee(req: Request, res: Response) {
    try {
      const employeeBody: EmployeeDTO = req.body;
      const employee = await this.createEmployeeUseCase.execute(employeeBody);
      res.status(201).json(employee);
    } catch (error) {
      const errorMessage = (error as any).message;
      res.status(400).json({ message: errorMessage });
    }
  }

  async getEmployees(req: Request, res: Response) {
    try {
      const employees = await this.getEmployeesUseCase.execute();
      res.status(200).json(employees);
    } catch (error) {
      const errorMessage = (error as any).message;
      res.status(400).json({ message: errorMessage });
    }
  }
}
