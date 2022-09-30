namespace AbstractNameSpace {
    abstract class Vehicle {
        constructor(protected wheelCount:number) {
        }
        abstract updateWheelCount(newWheelCount:number):void;
        showNumberOfWheels(){
            console.log(`${this.wheelCount} miles`)
        }
    }
    class A extends Vehicle {
        updateWheelCount(newWheelCount: number): void {
        }

    }
}

export {}
