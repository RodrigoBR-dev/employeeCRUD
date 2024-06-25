import { CPF } from './cpf.value';

describe('CPF Class', () => {
  it('should set the cpf correctly', () => {
    const testCpf = '544.590.030-40';
    const cpfInstance = new CPF(testCpf);
    expect(cpfInstance.cpf).toBe('54459003040');
  });

  it('should throw an error for invalid cpf', () => {
    expect(() => new CPF('invalid')).toThrow('Invalid cpf');
  });
});
