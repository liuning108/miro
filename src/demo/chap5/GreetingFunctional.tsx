import {FC, useEffect, useState} from "react";

interface GreetingProps{
    name?:string
}

const Greeting :FC<GreetingProps> =({name}:GreetingProps)=>{

    const [message,setMessage]=useState(name)

    useEffect(()=>{
        setMessage(name)
    },[name])

    return (
        <div>
            {message}
        </div>
    )
}

export default  Greeting
