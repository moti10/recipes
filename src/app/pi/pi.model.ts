import { Guarantor } from '../shared/guarantor.model';

export class PersonalInformation {
  public firstName: string;
  public lastName: string;
  public id: string;
  public birthDate: string;
  public dateIssueIdentityCard: string;
  public maritalStatus: string;
  public address: string;
  public city: string;
  public mobile: string;
  public stationary: string;
  public checkbox: boolean;

  public bank: string;
  public branch: string;
  public invoice: number;
  public lineOfCredit: number;
  public remarks1: string;


  public status: string;
  public פlaceOfWork: string;
  public role: string;
  public seniority: string;
  public netIncome: number;
  public rentals: number;
  public totalIncome: number;
  public bankGemach: string;
  public loadMortgage: string;
  public endDate: string;
  public monthlyRepayments: number;
  public totalLiabilities: number;
  public remarks2: string;

  public guarantors: Guarantor[];
  
  

  constructor(firstName: string, lastName: string, 
    id: string, 
    birthDate: string,
    dateIssueIdentityCard: string,
    maritalStatus: string,
    address: string,
    city: string,
    mobile: string,
    stationary: string,
    remarks1: string,

    bank: string, 
    branch: string,
     invoice: number,
     lineOfCredit: number,

    guarantors: Guarantor[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.birthDate = birthDate;
    this.dateIssueIdentityCard = dateIssueIdentityCard;
    this.maritalStatus = maritalStatus;
    this.address = address;
    this.city = city;
    this.mobile = mobile;
    this.stationary = stationary;
    this.remarks1 = remarks1;

    this.bank = bank;
    this.branch = branch;
    this.invoice = invoice;
    this.lineOfCredit = lineOfCredit;
    this.guarantors = guarantors;
  }
}
