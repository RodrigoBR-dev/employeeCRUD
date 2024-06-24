import { GetEmployeesUseCase } from '../../src/application/usecases/getEmployees.useCase';
import { EmployeeRepository } from '../../src/application/domain/employee.repository';

const mockEmployeeRepository: EmployeeRepository = {
  create: jest.fn(),
  findAll: jest.fn()
};

describe('GetEmployeesUseCase', () => {
  it('should get all employees', async () => {
    const useCase = new GetEmployeesUseCase(mockEmployeeRepository);

    await useCase.execute();
    expect(mockEmployeeRepository.findAll).toHaveBeenCalled();
  });
});
