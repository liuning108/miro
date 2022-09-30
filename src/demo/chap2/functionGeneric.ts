interface HasLength {
    length:number
}
function getLength<T extends HasLength> (arg:T) :number {
    if (arg.hasOwnProperty('length')){
        return arg['length']

    }
    return 0
}
export {}
