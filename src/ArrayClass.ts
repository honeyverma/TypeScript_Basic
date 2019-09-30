import { IEmployee } from './Interface'
import { EmployeeDetails } from './EmployeeDetails'
export class ArrayClass {
    employeesDetails: Array<EmployeeDetails> = Array<EmployeeDetails>();
    setEmployeeDetail(emplDetail: EmployeeDetails): void {
        this.employeesDetails.push(emplDetail);
    }

    getEmployeesDetails(): Array<IEmployee>{
        return this.employeesDetails;
    }
}