import {SumClass} from './SumClass'
import { nFinal } from './SumClass'
import { MapClass} from './MapClass'
import { Species } from './AbstractClass'
import { Animal } from './AnimalExtendAbs'
import { IEmployee } from './Interface'
import { EmployeeDetails } from './EmployeeDetails'
/* Sum class */
let sumCls = new SumClass(1, 6);
let result = sumCls.sumTheValue();
let resultMultiply = sumCls.multiplyAnother(3, 6);
let nFinalDo: number = nFinal;
console.log(result);
console.log(resultMultiply);
console.log(nFinalDo);

/*Map class */
let mapCls = new MapClass();
mapCls.setMap('Honey', 27); 
mapCls.setMap('Gab', 'Male');
mapCls.setMap('Engineer', true);
console.log(mapCls.getMap());
console.log(mapCls.getMapValueByKey('Gab'));

/*Abstract class */
let absAnimalSpeciesCls: Species = new Animal();
absAnimalSpeciesCls.knowSpecies('Lion');
console.log(absAnimalSpeciesCls.type + ' : ' + absAnimalSpeciesCls.name);

/* Interface */
let intrEmployDetails: IEmployee = new EmployeeDetails(
    1007,
    'Honey',
    new Date("1989-03-16"),
    new Date,
    10000.00
);
console.log(intrEmployDetails.getSalary());