export interface Employee {
    active: boolean;
    photo: string;
    name: string;
    email: string;
    hireDate: Date;
    cpf: string;
    address: {
      street: string;
      zip: string;
      neighborhood: string;
      city: string;
      state: string;
    };
  }
  