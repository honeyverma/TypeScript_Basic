export interface IEmployee {
    empCode: number;
    empName: string;
    empDobDate: Date;
    empDoJDate: Date;
    empAddress?: string;
    getSalary(): number;
}