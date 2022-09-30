
class Person {
    constructor(private msg:string) {
    }
    speak(){
        console.log(this.msg)
    }
}
const tom = new Person("Hello");
//tom.msg = "hello"
tom.speak();
export {}
