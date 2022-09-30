namespace OptionalChainingNS {
    interface Wheels{
        count? :number
    }

    interface Vehicles {
        wheels?:Wheels
    }

    class Automobile implements Vehicles {
        constructor(public wheels?:Wheels) {
        }
    }
    const car :Automobile | null = new Automobile(
        {
            count:undefined
        }
    )
    console.log("count ", car?.wheels?.count);

}

export {}
