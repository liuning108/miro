class Vehicle {
    constructor(private wheelCount:number) {
    }

    showNumberofWheels(){
        console.log(
            `moved ${this.wheelCount} miles`
        )
    }
    updateWheelCount(newWheelCount:number) {
        this.wheelCount=newWheelCount
    }
}

class Motocycle extends Vehicle {
    constructor() {
        super(2);
    }
}

class Automobile extends  Vehicle {
    constructor() {
        super(4);
    }
}
const motorCycle = new Motocycle()
motorCycle.showNumberofWheels();
const autoMobile = new Automobile()
autoMobile.updateWheelCount(5)
autoMobile.showNumberofWheels();

    export {}
