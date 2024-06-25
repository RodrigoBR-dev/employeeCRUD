export class Address {
  private _zip: string = '';
  private _state: string = '';
  constructor(
    readonly street: string,
    zip: string,
    readonly neighborhood: string,
    readonly city: string,
    state: string,
  ) {
    this.zip = zip;
    this.state = state;
  }

  private set zip(zip: string) {
    const cleanZip = zip.replace(/\D/g, '');
    if (cleanZip.length === 8) {
      this._zip = cleanZip;
    } else throw new Error('Invalid zip code');
  }

  set state(state: string) {
    if (state.length === 2) {
      this._state = state;
    } else throw new Error('Invalid state');
  }

  get zip() {
    return this._zip;
  }

  get state() {
    return this._state;
  }
}
