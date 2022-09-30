import {Simulate} from "react-dom/test-utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace  GenericNamespace {
    import change = Simulate.change;

    interface Wheels {
        count: Number
        diameter: number
    }

    interface Vehicle<T> {
        getName(): string

        getWheelCount: () => T
    }

    class Automobile implements Vehicle<Wheels>
    {

        constructor(private name:string,private wheels :Wheels) {
        }
        getWheelCount(): Wheels {
            return this.wheels
        }

        getName(): string {
            return this.name
        }

    }

    class Chevy extends Automobile{
        constructor() {
            super("Chery",{count:4,diameter:18});
        }
    }


    const chery = new Chevy()
    console.log('car name',chery.getName())
    console.log('wheels',chery.getWheelCount())


}
export {}
