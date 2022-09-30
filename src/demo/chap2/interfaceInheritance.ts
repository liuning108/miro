namespace InterfaceNamespace{
    interface Thing {
        name:string
        getFullName:()=> string
    }

    interface Vehicle extends Thing {
        wheelCount:number
        updateWheelCount:(newWhelloCount:number)=>void;
        showNumberOfWheels:()=>void
    }
}
export {}
