/**
 * $Git: constructor.ts 0.4.0-25-1 2022-10-31 03:00:16+04:00 yds $
 */
export class Entity {
  constructor(
    private _key: string,
    private _value: object
  ) {
  }
  get key() {return this._key };
  get value() {return this._value};
}
