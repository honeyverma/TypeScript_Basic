import { Species} from './AbstractClass'
const animalType: string = 'Animal';
export class Animal extends Species {
    constructor() {
        super(animalType);
    }

    knowSpecies(name: string): Species {
        this.name = name;
        return new Animal();
    }
}