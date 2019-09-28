import { IEmployee} from './Interface'
export class EmployeeDetails implements IEmployee{
    empCode: number;
    empName: string;
    empDobDate: Date;
    empDoJDate: Date;
    empAddress: string;
    empSalary: number;

    constructor(
        eCode: number,
        eName: string,
        eDobDate: Date,
        eDoJDate: Date,
        eSalary: number,
        eAddress?: string
    ) {
        this.empCode = eCode;
        this.empName = eName;
        this.empDobDate = eDobDate;
        this.empDoJDate = eDoJDate;
        this.empAddress = eAddress;
        this.empSalary = eSalary;
    }

    getSalary():number {
        return this.empSalary;
    }
}