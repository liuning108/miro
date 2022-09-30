
import React, {ChangeEvent, Component, FC} from "react";
import Greeting from "../chap5/GreetingFunctional";
//React Hooks for Function Component
export default class  Home extends Component<any, any> {
    state : { enteredName: string; } ={enteredName:''}
    constructor(props:any) {
        super(props);
        this.state = {enteredName:""}
        this.onChangeName =this.onChangeName.bind(this)
    }

    onChangeName(e:ChangeEvent<HTMLInputElement>) {
       this.setState(
           {
               enteredName:e.target.value
           }
       )
    }

    render() {
        console.log(this.state.enteredName)
        let name =this.state.enteredName
        return (
            <div>
                <input value={this.state.enteredName} onChange={this.onChangeName}/>

                <Greeting name={name}/>

            </div>
        );
    }

}
