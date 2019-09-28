export class MapClass{ 
    ageByName = new Map<string, any>();

    setMap(key:string, value:any): void {
        this.ageByName.set(key, value);
    }

    getMap(): Map<string, any> {
        return this.ageByName;
    }

    getMapValueByKey(key:string): any {
        return this.ageByName.get(key);
    }
}