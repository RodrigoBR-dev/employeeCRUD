import { cpf as document } from 'cpf-cnpj-validator';

export class CPF {
  private _cpf: string = '';

  constructor(cpf: string) {
    this.cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }

  private set cpf(cpf: string) {
    const cleanCpf = cpf.replace(/\D/g, '');
    if (document.isValid(cleanCpf)) {
      this._cpf = cleanCpf;
    } else throw new Error('Invalid cpf');
  }
}
