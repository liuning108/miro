import {useState} from "react";


export default  function useCountAdd():any{
    const [count,setCount]  = useState<number>(0)
    return [count,(number:number)=>{setCount(count+number)}]
}
