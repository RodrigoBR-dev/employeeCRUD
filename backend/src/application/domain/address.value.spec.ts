import { Address } from './address.value';

describe('Address constructor', () => {
  it('should set street, zip, neighborhood, city, and state fields correctly', () => {
    const address = new Address('R. Nova, 10', '12345678', 'Varzea', 'Cidade', 'ES');
    expect(address.street).toBe('R. Nova, 10');
    expect(address.zip).toBe('12345678');
    expect(address.neighborhood).toBe('Varzea');
    expect(address.city).toBe('Cidade');
    expect(address.state).toBe('ES');
  });

  it('should throw an error for invalid zip code', () => {
    expect(() => new Address('R. Nova, 10', 'invalid', 'Varzea', 'Cidade', 'ES')).toThrow('Invalid zip code');
  });

  it('should throw an error for invalid state', () => {
    expect(() => new Address('R. Nova, 10', '12345678', 'Varzea', 'Cidade', 'Estado')).toThrow('Invalid state');
  });
});
