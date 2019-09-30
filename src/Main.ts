import { SumClass } from './SumClass'
import { nFinal } from './SumClass'
import { MapClass} from './MapClass'
import { Species } from './AbstractClass'
import { Animal } from './AnimalExtendAbs'
import { IEmployee } from './Interface'
import { EmployeeDetails } from './EmployeeDetails'
import { ArrayClass } from './ArrayClass'

console.log('/ ---- Sum Class result ---/');
/* Sum class */
let sumCls = new SumClass(1, 6);
let result = sumCls.sumTheValue();
let resultMultiply = sumCls.multiplyAnother(3, 6);
let nFinalDo: number = nFinal;
console.log(result);
console.log(resultMultiply);
console.log(nFinalDo);

console.log('/ ---- Map<> Process ---/');
/*Map class */
let mapCls = new MapClass();
mapCls.setMap('Honey', 27); 
mapCls.setMap('Gab', 'Male');
mapCls.setMap('Engineer', true);
console.log(mapCls.getMap());
console.log(mapCls.getMapValueByKey('Gab'));

console.log('/ ---- Abstract Class process ---/');
/*Abstract class */
let absAnimalSpeciesCls: Species = new Animal();
absAnimalSpeciesCls.knowSpecies('Lion');
console.log(absAnimalSpeciesCls.type + ' : ' + absAnimalSpeciesCls.name);

console.log('/ ---- Interface Class process ---/');
/* Interface */
let intrEmployDetails: IEmployee = new EmployeeDetails(
    1007,
    'Honey',
    new Date("1989-03-16"),
    new Date,
    10000.00
);
console.log(intrEmployDetails.getSalary());

console.log('/ ---- Array[] process ---/');
/* Array with Itnerface*/
let allEmployeesDetails: ArrayClass = new ArrayClass();
allEmployeesDetails.setEmployeeDetail(new EmployeeDetails(1008, 'Alex', new Date("1990-01-26"), new Date, 15000, "USA"));
allEmployeesDetails.setEmployeeDetail(new EmployeeDetails(1009, 'John', new Date("1995-06-16"), new Date, 20000, "Holland"));
allEmployeesDetails.setEmployeeDetail(new EmployeeDetails(1010, 'Obama', new Date("1970-04-09"), new Date, 14000, "Mexico"));
allEmployeesDetails.setEmployeeDetail(new EmployeeDetails(1011, 'Trump', new Date("2005-11-30"), new Date, 500, "North Korea"));
for (let empDetailIndex in allEmployeesDetails.getEmployeesDetails()) {
    console.log(allEmployeesDetails.getEmployeesDetails()[empDetailIndex]);
}