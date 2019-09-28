export abstract class Species {
    name: string;
    type: string;

    constructor(type: string) {
        this.type = type; 
    }
    
    abstract knowSpecies(name: string): Species;
}