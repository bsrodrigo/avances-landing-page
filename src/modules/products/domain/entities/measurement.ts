export class Measurement {
  public readonly acronym: string;
  public readonly description: string;

  constructor(data: Measurement.Data) {
    this.acronym = data.acronym;
    this.description = data.description;
  }
}

export namespace Measurement {
  export type Data = {
    acronym: string;
    description: string;
  };
}
