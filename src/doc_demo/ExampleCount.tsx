
import React, {useEffect, useState} from "react";
import useCountAdd from "./hooks/useCountAdd";


export  default  function ExampleCount() {

    const  [count,setCount] = useCountAdd();
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    });
    // @ts-ignore
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{ setCount(2) }}>
                Click me
            </button>

        </div>
    )





}
