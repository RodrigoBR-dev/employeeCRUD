import { CreateEmployeeUseCase } from '../../src/application/usecases/createEmployee.useCase';
import { EmployeeRepository } from '../../src/application/domain/employee.repository';
import { Employee } from '../../src/application/domain/employee';

const mockEmployeeRepository: EmployeeRepository = {
  create: jest.fn(),
  findAll: jest.fn()
};

describe('CreateEmployeeUseCase', () => {
  it('should create an employee', async () => {
    const useCase = new CreateEmployeeUseCase(mockEmployeeRepository);
    const employeeData: Employee = {
      active: true,
      photo: 'photo_url',
      name: 'John Doe',
      email: 'john.doe@example.com',
      hireDate: new Date(),
      cpf: '12345678900',
      address: {
        street: 'Street',
        zip: '00000000',
        neighborhood: 'Neighborhood',
        city: 'City',
        state: 'State'
      }
    };

    await useCase.execute(employeeData);
    expect(mockEmployeeRepository.create).toHaveBeenCalledWith(employeeData);
  });
});
