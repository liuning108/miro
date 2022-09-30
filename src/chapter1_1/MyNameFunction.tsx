import {ChangeEvent, useState} from "react";


function MyNameFunction(){

    const [name,setName] = useState('');
    function handleChange(evt:ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value)
    }
    return (
        <div>
            <div>
                <h1>My name  Function   is: {name}</h1>
                <input type="text" value={name}
                       onChange={handleChange} />
            </div>
        </div>
    )
}
export default MyNameFunction
