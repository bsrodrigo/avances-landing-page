import { isValid, parseISO } from "date-fns";

export class DateTime {
  private readonly dateTime?: Date;

  private constructor(dateTime: Date) {
    this.dateTime = dateTime;
  }

  get value(): Date {
    return this.dateTime!;
  }

  public static create(dateTime?: string | Date): DateTime {
    let dateObj =
      dateTime && (dateTime instanceof Date ? dateTime : parseISO(dateTime));

    if (dateObj && !this.validate(dateObj)) dateObj = "";
    return dateObj ? new DateTime(dateObj) : null!;
  }

  public static validate(dateTime: Date): boolean {
    if (!isValid(dateTime)) return false;
    return true;
  }
}
