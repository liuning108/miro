namespace  A {
     export  class  FirstClass{}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace B {
    class SClass{}
    const text = new A.FirstClass()
}

export {}
