export class Guarantor {
  constructor(
    public firstName: string,
    public lastName: string,
    public id: string,
    public birthDate: string,
    public address: string,
    public city: string,
    public mobile: string,
    public stationary: string,

    public bank: string,
  public branch: string,
  public invoice: number,
  public lineOfCredit: number,
  public remarks1: string,
  ) { }
}
