export class ModuleClass {
    id: number;
    name: string;

    format() : String  {
        return this.id + ':' + this.name;
    }
}