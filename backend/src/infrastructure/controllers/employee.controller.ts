import { Request, Response } from 'express';
import { CreateEmployeeUseCase } from '../../application/usecases/createEmployee.useCase';
import { GetEmployeesUseCase } from '../../application/usecases/getEmployees.useCase';

export class EmployeeController {
  constructor(
    private createEmployeeUseCase: CreateEmployeeUseCase,
    private getEmployeesUseCase: GetEmployeesUseCase
  ) {}

  async createEmployee(req: Request, res: Response) {
    try {
      const employee = await this.createEmployeeUseCase.execute(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ message: (error as any).message });
    }
  }

  async getEmployees(req: Request, res: Response) {
    try {
      const employees = await this.getEmployeesUseCase.execute();
      res.status(200).json(employees);
    } catch (error) {
      res.status(400).json({ message: (error as any).message });
    }
  }
}
